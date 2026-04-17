
import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: Number,
  quantity: Number,
});

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    customer: {
      type: String,
      required: true,
    },

    email: String,
    phone_number: String,

    address: String,
    city: String,
    pin: String,
    country: String,

    items: [orderItemSchema],

    total: {
      type: Number,
      required: true,
    },

    paymentMethod: {
      type: String,
      enum: ["credit", "upi", "cod"],
    },

    status: {
      type: String,
      enum: ["Pending", "Shipped", "Delivered"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);