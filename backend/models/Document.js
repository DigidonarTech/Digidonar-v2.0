const express = require('express');
const router = express.Router();
const { upload } = require('../middleware/uploadMiddleware');
const Document = require('../models/Document');

router.post('/upload', upload.single('pdf'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "File upload fail!" });

    const newDoc = new Document({
      title: req.body.title || 'Untitled Document',
      pdfUrl: req.file.path, // Cloudinary ka full secure URL
      publicId: req.file.filename
    });

    await newDoc.save();
    res.status(201).json(newDoc);
  } catch (error) {
    console.error("Upload Error:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

// Saare documents lane ke liye
router.get('/all', async (req, res) => {
  try {
    const docs = await Document.find().sort({ createdAt: -1 });
    res.json(docs);
  } catch (err) {
    res.status(500).json({ message: "Fetch failed" });
  }
});

module.exports = router;