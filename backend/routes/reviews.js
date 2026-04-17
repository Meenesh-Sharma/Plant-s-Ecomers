

import express from "express";
import {
  createFeedback,
  getAllFeedbacks,
  getAcceptedFeedbacks,
  updateFeedbackStatus,
  deleteFeedback,
} from "../controllers/reviews.js";

const router = express.Router();

router.post("/", createFeedback);

router.get("/all", getAllFeedbacks);

router.get("/accepted", getAcceptedFeedbacks);


router.put("/:id", updateFeedbackStatus); 
router.delete("/:id", deleteFeedback);     

export default router;