// models/Review.js
import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
    plant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Plant",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Review", reviewSchema);