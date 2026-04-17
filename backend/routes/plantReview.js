
import express from "express";
import {
  createPlantReview,
  getPlantReviews,
  updatePlantReview,
  deletePlantReview,
} from "../controllers/plantReview.js";

const router = express.Router();

router.post("/", createPlantReview);
router.get("/", getPlantReviews);
router.put("/:id", updatePlantReview);
router.delete("/:id", deletePlantReview);

export default router;