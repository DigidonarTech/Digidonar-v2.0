import express from "express";
import { getAllLeads } from "../controllers/leadController.js";

const router = express.Router();

router.get("/all", getAllLeads);

export default router;
