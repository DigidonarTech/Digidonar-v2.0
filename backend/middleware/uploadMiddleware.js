const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'digidonar_docs',
    resource_type: 'raw', 
    // 'type' specify karta hai ki file public access ke liye hai (Fixes 401 error)
    type: 'upload', 
    // Flags: attachment browser ko batata hai ki ye file valid resource hai
    flags: 'attachment',
    // Ek hi baar public_id define karein extension ke saath
    public_id: (req, file) => `doc-${Date.now()}.pdf`,
  },
});

const upload = multer({ storage });
module.exports = { upload, cloudinary };