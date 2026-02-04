const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// PDF Routes Import (Ye line add ki hai)
const documentRoutes = require('./routes/documentRoutes');

const app = express();

// 1. Updated CORS - Dono Local aur Vercel allow honge
const allowedOrigins = [
  "http://localhost:5173",
  "https://digidonar-v2-0.vercel.app" // Aapka Vercel URL
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      return callback(new Error('CORS Policy Error: Origin not allowed'), false);
    }
    return callback(null, true);
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// 2. Register PDF Routes (Ye line add ki hai)
app.use('/api/documents', documentRoutes);

// --- Baaki Saara Code Same Rahega ---

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "Admin@Donar#2024";

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected!'))
  .catch((err) => console.log('❌ DB Connection Error:', err));

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  service: { type: String },
  status: { type: String, default: 'New' },
  createdAt: { type: Date, default: Date.now }
});
const Lead = mongoose.model('Lead', leadSchema);

// ROUTES
app.get("/", (req, res) => {
  res.status(200).send("Server is up and running!");
});

app.post('/api/leads', async (req, res) => {
  try {
    const newLead = new Lead(req.body);
    const savedLead = await newLead.save();
    res.status(201).json(savedLead);
  } catch (error) {
    res.status(500).json({ message: 'Error saving lead', error });
  }
});

app.get('/api/leads', async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching leads' });
  }
});

app.delete('/api/leads/:id', async (req, res) => {
  try {
    await Lead.findByIdAndDelete(req.params.id);
    res.json({ message: "Lead deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting lead" });
  }
});

app.put('/api/leads/:id', async (req, res) => {
  try {
    const { status } = req.body;
    const updatedLead = await Lead.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.json(updatedLead);
  } catch (error) {
    res.status(500).json({ message: "Status update fail", error });
  }
});

app.post('/api/admin/login', (req, res) => {
  const { password } = req.body;
  if (password === ADMIN_PASSWORD) {
    res.json({ success: true, token: "secret-admin-session-key" });
  } else {
    res.status(401).json({ success: false, message: "Wrong Password!" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));