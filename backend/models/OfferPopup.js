import mongoose from 'mongoose';

const offerPopupSchema = new mongoose.Schema(
  {
    title: { type: String, default: '' },
    description: { type: String, default: '' },
    imageUrl: { type: String, default: '' },
    buttonText: { type: String, default: '' },
    buttonLink: { type: String, default: '' },
    isActive: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model('OfferPopup', offerPopupSchema);
