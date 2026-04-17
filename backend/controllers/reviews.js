

import Feedback from "../model/Reviews.js";
import Notification from "../model/Notifications.js";
import { io } from "../index.js";

export const createFeedback = async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();

    // 🔥 Create Notification
    const notif = await Notification.create({
      type: "review",
      message: `New feedback from ${req.body.name || "a user"}`,
    });

    // 🔥 Emit real-time notification
    io.emit("newNotification", notif);

    res.status(201).json({
      message: "Feedback submitted successfully",
      feedback,
    });

  } catch (error) {
    res.status(500).json({ message: "Error saving feedback" });
  }
};


// GET ALL (ADMIN)
export const getAllFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching feedbacks" });
  }
};


//  GET ONLY ACCEPTED (USER SIDE)
export const getAcceptedFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find({ status: "accepted" });
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching accepted feedbacks" });
  }
};


//  UPDATE STATUS (ACCEPT / FREEZE)
export const updateFeedbackStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const feedback = await Feedback.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json({
      message: `Feedback ${status} successfully`,
      feedback,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating status" });
  }
};


//  DELETE FEEDBACK (REJECT)
export const deleteFeedback = async (req, res) => {
  try {
    await Feedback.findByIdAndDelete(req.params.id);

    res.json({
      message: "Feedback rejected and deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Error deleting feedback" });
  }
};