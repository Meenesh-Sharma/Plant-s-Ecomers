

import PlantCare from '../model/PlantCare.js';

export const createPlantCare = async (req, res) => {
  try {
    const { plantName, plantType, care } = req.body;

    const newPlant = await PlantCare.create({
      plantName,
      plantType,
      care,
    });

    res.status(201).json(newPlant);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* GET ALL */
export const getAllPlants = async (req, res) => {
  try {
    const plants = await PlantCare.find().sort({ createdAt: -1 });
    res.json(plants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* GET ONE */
export const getSinglePlant = async (req, res) => {
  try {
    const plant = await PlantCare.findById(req.params.id);
    res.json(plant);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* UPDATE */
export const updatePlant = async (req, res) => {
  try {
    const updated = await PlantCare.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* DELETE */
export const deletePlant = async (req, res) => {
  try {
    await PlantCare.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};