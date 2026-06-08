import dotenv from "dotenv";
dotenv.config();
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

console.log(
  process.env.CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_NAME,
  process.env.CLOUDINARY_API_KEY ? 'KEY_OK' : 'KEY_MISSING'
);

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    const isPDF = file.originalname?.toLowerCase().endsWith('.pdf') || file.mimetype === 'application/pdf';
    return {
      folder: 'digidonar_docs',
      resource_type: isPDF ? 'image' : 'raw',
      allowed_formats: ['pdf'],
      access_mode: 'public',
      type: 'upload'
    };
  }
});

export const upload = multer({ storage });
const imageStorage = new CloudinaryStorage({
  cloudinary,
  params: async () => ({
    folder: 'digidonar_offers',
    resource_type: 'image',
    allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
    access_mode: 'public',
    type: 'upload'
  })
});

export const imageUpload = multer({ storage: imageStorage });
export { cloudinary };
