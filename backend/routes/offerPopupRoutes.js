import express from 'express';
import { imageUpload } from '../middleware/uploadMiddleware.js';
import OfferPopup from '../models/OfferPopup.js';

const router = express.Router();
const ADMIN_TOKEN = 'secret-admin-session-key';

const requireAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ')
    ? authHeader.slice(7)
    : authHeader;

  if (token !== ADMIN_TOKEN) {
    return res.status(401).json({ message: 'Unauthorized admin request' });
  }

  next();
};

const editableFields = [
  'title',
  'description',
  'imageUrl',
  'buttonText',
  'buttonLink',
  'isActive',
];

const getOrCreatePopup = async () => {
  let popup = await OfferPopup.findOne().sort({ createdAt: -1 });

  if (!popup) {
    popup = await OfferPopup.create({
      title: '',
      description: '',
      imageUrl: '',
      buttonText: '',
      buttonLink: '',
      isActive: false,
    });
  }

  return popup;
};

router.get('/active', async (req, res) => {
  try {
    const popup = await OfferPopup.findOne({ isActive: true }).sort({ updatedAt: -1 });

    if (!popup) {
      return res.status(200).json(null);
    }

    res.json({
      _id: popup._id,
      title: popup.title,
      description: popup.description,
      imageUrl: popup.imageUrl,
      buttonText: popup.buttonText,
      buttonLink: popup.buttonLink,
      isActive: popup.isActive,
      updatedAt: popup.updatedAt,
    });
  } catch (error) {
    console.error('Offer popup public fetch error:', error);
    res.status(500).json({ message: 'Failed to fetch offer popup' });
  }
});

router.get('/admin', requireAdmin, async (req, res) => {
  try {
    const popup = await getOrCreatePopup();
    res.json(popup);
  } catch (error) {
    console.error('Offer popup admin fetch error:', error);
    res.status(500).json({ message: 'Failed to fetch offer popup settings' });
  }
});

router.put('/admin', requireAdmin, async (req, res) => {
  try {
    const payload = {};

    editableFields.forEach((field) => {
      if (Object.prototype.hasOwnProperty.call(req.body, field)) {
        payload[field] = req.body[field];
      }
    });

    const existing = await getOrCreatePopup();
    const popup = await OfferPopup.findByIdAndUpdate(
      existing._id,
      { $set: payload },
      { new: true, runValidators: true }
    );

    res.json(popup);
  } catch (error) {
    console.error('Offer popup update error:', error);
    res.status(500).json({ message: 'Failed to update offer popup' });
  }
});

router.patch('/admin/status', requireAdmin, async (req, res) => {
  try {
    const existing = await getOrCreatePopup();
    const popup = await OfferPopup.findByIdAndUpdate(
      existing._id,
      { $set: { isActive: Boolean(req.body.isActive) } },
      { new: true }
    );

    res.json(popup);
  } catch (error) {
    console.error('Offer popup status update error:', error);
    res.status(500).json({ message: 'Failed to update offer popup status' });
  }
});

router.post('/admin/upload', requireAdmin, imageUpload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'Image file is required' });
    }

    const existing = await getOrCreatePopup();
    const popup = await OfferPopup.findByIdAndUpdate(
      existing._id,
      { $set: { imageUrl: req.file.path } },
      { new: true }
    );

    res.status(201).json(popup);
  } catch (error) {
    console.error('Offer popup image upload error:', error);
    res.status(500).json({ message: error.message || 'Failed to upload offer image' });
  }
});

export default router;
