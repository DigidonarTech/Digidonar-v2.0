const express = require('express');
const router = express.Router();
const Document = require('../models/Document');
const { upload, cloudinary } = require('../middleware/uploadMiddleware');

// 1. UPLOAD PDF
router.post('/upload', upload.single('pdf'), async (req, res) => {
  try {
    const newDoc = new Document({
      title: req.body.title || "Main Doc",
      pdfUrl: req.file.path,
      publicId: req.file.filename // Cloudinary ki unique ID
    });
    await newDoc.save();
    res.status(200).json({ message: "File Uploaded!", data: newDoc });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 2. GET ALL DOCS (Admin List dikhane ke liye)
router.get('/all', async (req, res) => {
  try {
    const docs = await Document.find().sort({ uploadedAt: -1 });
    res.json(docs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 3. REMOVE/DELETE PDF
router.delete('/delete/:id', async (req, res) => {
  try {
    const doc = await Document.findById(req.params.id);
    if (!doc) return res.status(404).json({ message: "File nahi mili" });

    // Cloudinary se delete karo
    await cloudinary.uploader.destroy(doc.publicId, { resource_type: 'raw' });
    
    // MongoDB se delete karo
    await Document.findByIdAndDelete(req.params.id);
    
    res.status(200).json({ message: "File Removed Successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;