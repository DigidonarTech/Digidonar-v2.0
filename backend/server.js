import dotenv from "dotenv";
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import leadRoutes from "./routes/leadRoutes.js";
import documentRoutes from "./routes/documentRoutes.js";
import Lead from './models/Leads.js';

dotenv.config();
const app = express();

// 1. Updated CORS - Allow all for development flexibility
app.use(cors({
  origin: ['https://www.digidonar.co.in', 'http://localhost:5173'],
  credentials: true
}));

app.use(express.json());
app.use("/api/leads", leadRoutes);

// 2. Register PDF Routes
app.use('/api/documents', documentRoutes);

// --- Baaki Saara Code SAME ---

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected!'))
  .catch((err) => console.log('❌ DB Connection Error:', err));


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
    const updatedLead = await Lead.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    res.json(updatedLead);
  } catch (error) {
    res.status(500).json({ message: "Status update fail", error });
  }
});

app.post('/api/admin/login', (req, res) => {
  const { password } = req.body;
  console.log('ENV PASSWORD =>', ADMIN_PASSWORD);
  console.log('RECEIVED PASSWORD =>', password);
  if (password === ADMIN_PASSWORD) {
    res.json({ success: true, token: "secret-admin-session-key" });
  } else {
    res.status(401).json({ success: false, message: "Wrong Password!" });
  }
});

app.get('/api/pdf-proxy', async (req, res) => {
  try {
    const { url } = req.query;
    if (!url) return res.status(400).send('URL required');

    const fetch = (await import('node-fetch')).default;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Cloudinary fetch failed: ${response.status} ${response.statusText}`);
    }

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline');

    // Stream the response directly to the client
    response.body.pipe(res);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).send('Failed to fetch PDF');
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
