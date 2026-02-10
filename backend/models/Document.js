import mongoose from 'mongoose';

const documentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  servicekey: { type: String, required: true, unique: true }, // Linked to service key
  pdfUrl: { type: String, required: true },
  publicId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Default export (VERY IMPORTANT)
export default mongoose.model('Document', documentSchema);
