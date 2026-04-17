
import express from "express";
import {
  createOrder,
  getOrders,
  updateOrder,
  deleteOrder,
  getUserOrders,
  getUserOrdersById
} from "../controllers/order.js";
import { protect }from "../middleware/auth.js"

const router = express.Router();

router.get("/user/:id", getUserOrdersById);
router.get("/my-orders", protect, getUserOrders);
router.get("/", getOrders);
router.post("/", protect, createOrder);
router.put("/:id", updateOrder);
router.delete("/:id", deleteOrder);

export default router;