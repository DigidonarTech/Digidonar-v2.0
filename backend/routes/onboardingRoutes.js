import express from 'express';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

const SERVICE_FOLDERS = {
  whatsapp: 'whatsapp-api',
  rcs: 'rcs',
  dlt: 'dlt',
};

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

function uploadBuffer(file, folder) {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: 'auto',
        use_filename: true,
        unique_filename: true,
      },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );

    stream.end(file.buffer);
  });
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
    });
  } catch (error) {
    console.error('ONBOARDING CLOUDINARY UPLOAD ERROR:', error);
    res.status(500).json({ message: 'Document upload failed.' });
  }
});

export default router;
