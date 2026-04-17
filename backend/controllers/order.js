
import Order from "../model/Order.js";
import Notification from "../model/Notifications.js";
import { io } from "../index.js";

export const createOrder = async (req, res) => {
  try {
    const {
      shippingInfo,
      cart,
      totalPrice,
      paymentMethod,
    } = req.body;

    const userId = req.user.id;

    const newOrder = new Order({
      userId: userId,
      customer: shippingInfo.name,
      email: shippingInfo.email,
      phone_number: shippingInfo.phoneno,
      address: shippingInfo.address,
      city: shippingInfo.city,
      pin: shippingInfo.postalCode,
      country: shippingInfo.country,
      items: cart,
      total: totalPrice,
      paymentMethod,
    });

    await newOrder.save();

    const notif = await Notification.create({
      type: "order",
      message: `New order from ${shippingInfo.name}`,
    });

    io.emit("newNotification", notif);

    res.status(201).json({
      message: "Order placed successfully",
      order: newOrder,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOrders = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;

    const skip = (page - 1) * limit;

    const orders = await Order.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Order.countDocuments();

    res.json({
      orders,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const order = await Order.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    res.json({ message: "Order updated", order });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;

    await Order.findByIdAndDelete(id);

    res.json({ message: "Order deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getUserOrders = async (req, res) => {
  try {
   const userId = req.user.id;

    const orders = await Order.find({ userId }).sort({ createdAt: -1 });

    res.json({ orders });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserOrdersById = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.id })
      .sort({ createdAt: -1 });

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

