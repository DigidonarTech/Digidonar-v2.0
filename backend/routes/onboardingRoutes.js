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

function getUploadPublicId(file) {
  const parsed = path.parse(file.originalname || 'file');
  const safeName = sanitizeFilePart(parsed.name);

  return `${safeName}-${Date.now()}`;
}

function getUploadOptions(file, folder) {
  return {
    folder,
    resource_type: 'auto',
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
  const parsed = path.parse(file.originalname || 'file');
  const ext = parsed.ext || '';
  const tempPath = path.join(os.tmpdir(), `${getUploadPublicId(file)}${ext}`);

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

router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded.' });
    }

    const serviceFolder = SERVICE_FOLDERS[req.body.service] || 'misc';
    const fieldName = String(req.body.fieldName || 'documents').replace(/[^a-z0-9_-]/gi, '-');
    const folder = `digidonar-onboarding/${serviceFolder}/${fieldName}`;
    const result = await uploadBuffer(req.file, folder);

    res.status(201).json({
      secure_url: result.secure_url,
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
