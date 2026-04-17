
import Review from "../model/PlantReview.js";

// CREATE
export const createPlantReview = async (req, res) => {
  try {
    const { name, review, plant } = req.body;

    const newReview = await Review.create({
      name,
      review,
      plant,
    });

    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPlantReviews = async (req, res) => {
  try {
    const { plant } = req.query;

    let filter = {};
    if (plant) filter.plant = plant;

    const reviews = await Review.find(filter).populate("plant");
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePlantReview = async (req, res) => {
  try {
    const updated = await Review.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
export const deletePlantReview = async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};