
import express from "express";
import { getDashboardData } from "../controllers/dashbord.js";

const router = express.Router();

router.get("/", getDashboardData);

export default router;