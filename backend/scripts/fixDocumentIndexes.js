import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

async function fixIndexes() {
  try {
    await mongoose.connect(MONGO_URI);
    const db = mongoose.connection.db;
    const collection = db.collection('documents');

    // Drop old indexes if they exist
    try { await collection.dropIndex('serviceKey_1'); } catch (e) { /* ignore */ }
    try { await collection.dropIndex('servicekey_1'); } catch (e) { /* ignore */ }

    // Create correct unique index
    await collection.createIndex({ servicekey: 1 }, { unique: true });
    console.log('✅ Index fixed: unique index on servicekey');
    process.exit(0);
  } catch (err) {
    console.error('❌ Index fix error:', err);
    process.exit(1);
  }
}

fixIndexes();
