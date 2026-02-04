const express = require('express');
const router = express.Router();
const { upload } = require('../middleware/uploadMiddleware');
const Document = require('../models/Document'); // Ensure ye file exist karti hai

// 1. Upload Document
router.post('/upload', upload.single('pdf'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "File upload fail!" });

    const newDoc = new Document({
      title: req.body.title || 'Untitled Document',
      pdfUrl: req.file.path, 
      publicId: req.file.filename
    });

    await newDoc.save();
    res.status(201).json(newDoc);
  } catch (error) {
    console.error("Upload Error:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

// 2. Get All Documents (Yahan 500 aa raha hai toh DB connection check karo)
router.get('/all', async (req, res) => {
  try {
    const docs = await Document.find().sort({ createdAt: -1 });
    res.json(docs);
  } catch (err) {
    console.error("Fetch Error:", err);
    res.status(500).json({ message: "Fetch failed", error: err.message });
  }
});

// 3. Delete Document (Aapke frontend ke liye zaroori hai)
router.delete('/delete/:id', async (req, res) => {
  try {
    await Document.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed" });
  }
});

module.exports = router;