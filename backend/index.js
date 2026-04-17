
import 'dotenv/config';
import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

import connectDB from "./config/db.js";

import userRoutes from "./routes/user.js";
import plantCareRoutes from './routes/plantcare.js';
import plantRoutes from './routes/plants.js';
import reviewsRoutes from './routes/reviews.js';
import orderRoutes from "./routes/order.js";
import dashboardRoutes from "./routes/dashbord.js";
import notificationRoutes from "./routes/notifications.js"; 
import reviewPlantRoutes from "./routes/plantReview.js"



// DB connect
connectDB();

const app = express();

const server = http.createServer(app);

export const io = new Server(server, {
  cors: {
    origin: process.env.ALLOWED_ORIGINS?.split(",") || "*",
    credentials: true,
  },
});

// socket connection
io.on("connection", (socket) => {
  // console.log("User connected:", socket.id);

  socket.on("disconnect", () => {
    // console.log("User disconnected:", socket.id);
  });
});

// --- CORS ---
const allowedOrigins = process.env.ALLOWED_ORIGINS 
  ? process.env.ALLOWED_ORIGINS.split(",").map(origin => origin.trim()) 
  : [];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);

    if (allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log(`CORS Blocked: ${origin}`);
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));

app.use(express.json());

app.use("/api/auth", userRoutes);
app.use('/api/plant-care', plantCareRoutes);
app.use('/api/plants', plantRoutes);
app.use('/api/reviews', reviewsRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/Plantreviews", reviewPlantRoutes);


const PORT = process.env.PORT ;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});