const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  pdfUrl: { type: String, required: true },
  publicId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Ye export sahi hona chahiye tabhi .find() kaam karega
module.exports = mongoose.model('Document', documentSchema);