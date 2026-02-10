import dotenv from "dotenv";
dotenv.config();
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

console.log(
  process.env.CLOUDINARY_NAME,
  process.env.CLOUDINARY_API_KEY ? 'KEY_OK' : 'KEY_MISSING'
);

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'digidonar_docs',
    resource_type: 'raw',
    allowed_formats: ['pdf'],
    access_mode: 'public',
    type: 'upload'
  }
});

export const upload = multer({ storage });
export { cloudinary };
