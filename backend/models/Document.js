const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  pdfUrl: { type: String, required: true }, 
  publicId: { type: String, required: true }, // Delete karne ke liye zaroori hai
  uploadedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Document', documentSchema);