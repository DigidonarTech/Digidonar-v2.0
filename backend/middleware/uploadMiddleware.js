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
    resource_type: 'raw', // PDF ke liye 'raw' hi sahi hai
    // Sabse bada fix: extension (.pdf) manually add karna zaroori hai
    public_id: (req, file) => {
      const fileName = `doc-${Date.now()}.pdf`;
      return fileName;
    },
  },
});

const upload = multer({ storage });
module.exports = { upload, cloudinary };