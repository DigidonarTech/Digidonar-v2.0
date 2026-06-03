import express from 'express';
import multer from 'multer';
import fs from 'fs/promises';
import os from 'os';
import path from 'path';
import { v2 as cloudinary } from 'cloudinary';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

const SERVICE_FOLDERS = {
  whatsapp: 'whatsapp-api',
  rcs: 'rcs',
  dlt: 'dlt',
};
const CLOUDINARY_STANDARD_UPLOAD_LIMIT = 10 * 1024 * 1024;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

function sanitizeFilePart(value) {
  return String(value || 'file')
    .replace(/\.[^/.]+$/, '')
    .replace(/[^a-z0-9_-]/gi, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase() || 'file';
}

function getFileExtension(file) {
  const parsed = path.parse(file.originalname || 'file');
  return (parsed.ext || '').toLowerCase();
}

function getResourceType(file) {
  const mimeType = String(file.mimetype || '').toLowerCase();

  if (mimeType.startsWith('image/')) return 'image';

  return 'raw';
}

function getUploadPublicId(file) {
  const parsed = path.parse(file.originalname || 'file');
  const safeName = sanitizeFilePart(parsed.name);
  const ext = getFileExtension(file);

  return `${safeName}-${Date.now()}`;
}

function getUploadOptions(file, folder) {
  return {
    folder,
    resource_type: getResourceType(file),
    public_id: getUploadPublicId(file),
    filename_override: file.originalname,
    use_filename: true,
    unique_filename: false,
    access_mode: 'public',
  };
}

function uploadSmallBuffer(file, folder) {
  return new Promise((resolve, reject) => {
    const uploadOptions = getUploadOptions(file, folder);

    const stream = cloudinary.uploader.upload_stream(
      uploadOptions,
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );

    stream.end(file.buffer);
  });
}

async function uploadLargeBuffer(file, folder) {
  const tempPath = path.join(os.tmpdir(), `${sanitizeFilePart(path.parse(file.originalname || 'file').name)}-${Date.now()}${getFileExtension(file)}`);

  await fs.writeFile(tempPath, file.buffer);

  try {
    return await cloudinary.uploader.upload_large(tempPath, {
      ...getUploadOptions(file, folder),
      chunk_size: 6 * 1024 * 1024,
    });
  } finally {
    await fs.unlink(tempPath).catch(() => {});
  }
}

function uploadBuffer(file, folder) {
  if (file.size > CLOUDINARY_STANDARD_UPLOAD_LIMIT) {
    return uploadLargeBuffer(file, folder);
  }

  return uploadSmallBuffer(file, folder);
}

function getSheetUrl(result) {
  if (result.resource_type !== 'raw') return result.secure_url;

  return result.secure_url.replace(/\.(pdf|doc|docx|xls|xlsx|ppt|pptx|txt|csv)$/i, '');
}

router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded.' });
    }

    const serviceFolder = SERVICE_FOLDERS[req.body.service] || 'misc';
    const fieldName = String(req.body.fieldName || 'documents').replace(/[^a-z0-9_-]/gi, '-');
    const folder = `digidonar-onboarding/${serviceFolder}/${fieldName}`;
    const result = await uploadBuffer(req.file, folder);
    const sheetUrl = getSheetUrl(result);

    res.status(201).json({
      secure_url: sheetUrl,
      original_secure_url: result.secure_url,
      public_id: result.public_id,
      resource_type: result.resource_type,
      content_type: req.file.mimetype,
    });
  } catch (error) {
    console.error('ONBOARDING CLOUDINARY UPLOAD ERROR:', error);
    res.status(500).json({ message: 'Document upload failed.' });
  }
});

export default router;
