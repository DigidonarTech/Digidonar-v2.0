const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: 'ddc0nm',
  api_key: '5815536222',
  api_secret: 'F0b6y3L2q2hMN2NmHA-Tq0'
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'digidonar_docs',
    resource_type: 'raw', // PDF ke liye 'raw' zaroori hai
    public_id: (req, file) => file.originalname.split('.')[0],
  },
});

module.exports = { cloudinary, storage };
