const express = require('express');
const router = express.Router();
const { upload } = require('../middleware/uploadMiddleware');
const Document = require('../models/Document');

// Upload Route
router.post('/upload', upload.single('pdf'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "File nahi mili!" });

    const newDoc = new Document({
      title: req.body.title || 'Untitled PDF',
      pdfUrl: req.file.secure_url,
      publicId: req.file.filename
    });

    await newDoc.save();
    res.status(201).json(newDoc);
  } catch (error) {
    console.error("DETAILED UPLOAD ERROR:", error);
    res.status(500).json({ message: error.message });
  }
});

// All Docs Route
router.get('/all', async (req, res) => {
  try {
    const docs = await Document.find().sort({ createdAt: -1 });
    res.status(200).json(docs);
  } catch (error) {
    console.error("FETCH ERROR:", error);
    res.status(500).json({ message: error.message });
  }
});

// Delete Route (Frontend ke liye zaroori hai)
router.delete('/delete/:id', async (req, res) => {
  try {
    await Document.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;