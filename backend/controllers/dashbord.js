
import Order from "../model/Order.js";
import Plant from "../model/plants.js";
import User from "../model/User.js";
import Review from "../model/Reviews.js";

export const getDashboardData = async (req, res) => {
  try {
  
    const plants = await Plant.countDocuments();
    const orders = await Order.countDocuments();
    const users = await User.countDocuments();
    const reviews = await Review.countDocuments();

  
    const revenueResult = await Order.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: "$total" },
        },
      },
    ]);
    const revenue = revenueResult[0]?.totalRevenue || 0;

 
    const chartData = await Order.aggregate([
      {
        $match: {
          createdAt: {
            $gte: new Date(new Date().setMonth(new Date().getMonth() - 6)),
          },
        },
      },
      {
        $group: {
          _id: { $month: "$createdAt" },
          sales: { $sum: "$total" },
          orders: { $sum: 1 },
        },
      },
      { $sort: { "_id": 1 } },
    ]);

    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    const chart = chartData.map((item) => ({
      name: months[item._id - 1],
      sales: item.sales,
      orders: item.orders,
    }));

    const recentOrders = await Order.find()
      .sort({ createdAt: -1 })
      .limit(5);

    const topPlants = await Order.aggregate([
      { $unwind: "$items" },
      {
        $group: {
          _id: "$items.name",
          totalSold: { $sum: "$items.quantity" },
        },
      },
      { $sort: { totalSold: -1 } },
      { $limit: 5 },
    ]);

    res.json({
      stats: { plants, orders, users, reviews, revenue },
      chart,
      recentOrders,
      topPlants,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Dashboard error" });
  }
};