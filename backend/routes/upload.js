const express = require('express');
const router = express.Router();
const multer = require('multer');
const { storage } = require('../config/cloudinary');
const upload = multer({ storage });
const Document = require('../models/Document'); // Model banana padega

router.post('/upload-pdf', upload.single('pdf'), async (req, res) => {
  try {
    const newDoc = new Document({
      title: req.body.title,
      pdfUrl: req.file.path, // Cloudinary ka link yahan hota hai
    });
    await newDoc.save();
    res.status(200).json({ message: "Upload Success!", url: req.file.path });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;