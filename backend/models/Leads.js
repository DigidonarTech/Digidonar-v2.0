import mongoose from 'mongoose';

const LeadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  service: { type: String, default: 'General Inquiry' },
  status: { type: String, default: 'New' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Lead', LeadSchema);
