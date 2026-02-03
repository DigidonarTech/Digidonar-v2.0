const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: 'ddc7x60nm',
  api_key: '581564763536222',
  api_secret: 'F0b6y3L2q2hTFxC0MN2NmHA-Tq0'
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