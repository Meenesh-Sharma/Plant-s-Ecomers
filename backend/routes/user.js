import express from "express";
import {
  signup,
  login,
  getProfile,
  getAllUsers,
  updateUser,
  deleteUser,
   getUserById
} from "../controllers/user.js";

import { protect } from "../middleware/auth.js";

const router = express.Router();

// AUTH
router.post("/signup", signup);
router.post("/login", login);

// USER
router.get("/profile", protect, getProfile);
router.get("/users", getAllUsers);
router.put("/users/:id", protect, updateUser);
router.get("/users/:id", getUserById);
router.delete("/users/:id",  deleteUser);

export default router;