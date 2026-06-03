import dotenv from "dotenv";
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import leadRoutes from "./routes/leadRoutes.js";
import documentRoutes from "./routes/documentRoutes.js";
import onboardingRoutes from "./routes/onboardingRoutes.js";
import Lead from './models/Leads.js';

dotenv.config();
const app = express();

// 1. Updated CORS - Allow all for development flexibility
app.use(cors({
  origin: ['https://www.digidonar.net', 'http://localhost:5173'],
  credentials: true
}));

app.use(express.json());
app.use("/api/leads", leadRoutes);

// 2. Register PDF Routes
app.use('/api/documents', documentRoutes);
app.use('/api/onboarding', onboardingRoutes);

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

function unwrapProxyUrl(value) {
  let target = String(value || '').trim();

  for (let i = 0; i < 3; i += 1) {
    try {
      const parsed = new URL(target);
      const nested = parsed.searchParams.get('url') || parsed.searchParams.get('q');
      if (!nested) break;
      target = nested;
    } catch {
      break;
    }
  }

  return target;
}

function getCloudinaryFallbackUrls(url) {
  const urls = [url];

  if (url.includes('/raw/upload/')) {
    urls.push(url.replace('/raw/upload/', '/image/upload/'));
  }

  if (url.includes('/image/upload/')) {
    urls.push(url.replace('/image/upload/', '/raw/upload/'));
  }

  return [...new Set(urls)];
}

function inferContentType(url, upstreamType) {
  const cleanUrl = String(url).split('?')[0].toLowerCase();

  if (cleanUrl.endsWith('.pdf')) return 'application/pdf';
  if (cleanUrl.endsWith('.png')) return 'image/png';
  if (cleanUrl.endsWith('.jpg') || cleanUrl.endsWith('.jpeg')) return 'image/jpeg';
  if (cleanUrl.endsWith('.webp')) return 'image/webp';

  return upstreamType || 'application/octet-stream';
}

app.get('/api/pdf-proxy', async (req, res) => {
  let targetUrl = '';
  try {
    targetUrl = unwrapProxyUrl(req.query.url);
    if (!targetUrl) return res.status(400).send('URL required');

    const fetch = (await import('node-fetch')).default;
    let response;
    let finalUrl = targetUrl;

    for (const candidateUrl of getCloudinaryFallbackUrls(targetUrl)) {
      response = await fetch(candidateUrl, {
        redirect: 'follow',
        headers: { 'User-Agent': 'Digidonar-PDF-Proxy/1.0' },
      });

      if (response.ok) {
        finalUrl = candidateUrl;
        break;
      }
    }

    if (!response || !response.ok) {
      const status = response ? response.status : 502;
      const statusText = response ? response.statusText : 'No response';
      return res
        .status(status >= 400 && status < 600 ? status : 502)
        .send(`Failed to fetch document: ${status} ${statusText}`);
    }

    const contentType = inferContentType(finalUrl, response.headers.get('content-type'));
    res.setHeader('Content-Type', contentType);
    res.setHeader('Content-Disposition', 'inline');
    res.setHeader('Cache-Control', 'public, max-age=3600');

    // Stream the response directly to the client
    response.body.pipe(res);
  } catch (error) {
    console.error('Proxy error:', targetUrl, error);
    res.status(500).send('Failed to fetch document');
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
