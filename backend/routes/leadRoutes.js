import express from "express";
import { getAllLeads } from "../controllers/leadController.js";
import Lead from "../models/Leads.js";

const router = express.Router();

router.get("/all", getAllLeads);

// Lead delete karne ka route
// DELETE ALL LEADS
router.delete('/delete-all/all', async (req, res) => {
  try {
    // Lead model ke according pura saaf kar dega
    await Lead.deleteMany({}); 
    res.status(200).json({ message: "All leads deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete all leads" });
  }
});

export default router;
