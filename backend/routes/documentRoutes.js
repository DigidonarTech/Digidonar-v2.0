import express from 'express';
import { upload } from '../middleware/uploadMiddleware.js';
import Document from '../models/Document.js';

const router = express.Router();

// Upload Route
router.post('/upload', upload.single('pdf'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "File nahi mili!" });
    }

    const newDoc = new Document({
      title: req.body.title || 'Untitled PDF',
      servicekey: req.body.service, // Save service key (schema expects 'servicekey')
      pdfUrl: req.file.path,
      publicId: req.file.filename
    });

    await newDoc.save();
    res.status(201).json(newDoc);
  } catch (error) {
    console.error("DETAILED UPLOAD ERROR:", error);
    if (error.code === 11000 && error.keyPattern && error.keyPattern.servicekey) {
      return res.status(409).json({ message: "A document for this service already exists. Please delete it before uploading a new one." });
    }
    res.status(500).json({ message: error.message });
  }
});

// All Docs Route
router.get('/all', async (req, res) => {
  try {
    // .select('pdfUrl title') returns only those fields + the _id
    const docs = await Document.find({ pdfUrl: { $ne: null } })
      .select('pdfUrl title servicekey createdAt')
      .sort({ createdAt: -1 });

    res.status(200).json(docs);
  } catch (error) {
    console.error("FETCH ERROR:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get('/by-service/:service', async (req, res) => {
  try {
    const doc = await Document.findOne({ servicekey: req.params.service })
      .sort({ createdAt: -1 });
    if (!doc) return res.status(404).json({});
    res.json(doc);
  } catch {
    res.status(500).json({});
  }
});

// Get Latest Doc for "View Doc" button
router.get('/latest', async (req, res) => {
  try {
    const doc = await Document.findOne().sort({ createdAt: -1 });
    if (!doc) {
      return res.status(404).json({ message: "No documents found" });
    }
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete Route
router.delete('/delete/:id', async (req, res) => {
  try {
    await Document.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
