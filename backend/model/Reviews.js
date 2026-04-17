

import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: String,
    subject: String,
    message: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "accepted", "rejected", "frozen"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Feedback", feedbackSchema);