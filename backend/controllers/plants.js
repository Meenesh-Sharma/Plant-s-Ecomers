

import Plant from '../model/plants.js';
import fs from 'fs';
import cloudinary from '../config/cloudinary.js'; 

// Get All Plants
const getPlants = async (req, res) => {
  try {
    const plants = await Plant.find().sort({ createdAt: -1 });
    res.json(plants);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get Plant By ID
const getPlantById = async (req, res) => {
  try {
    const plant = await Plant.findById(req.params.id);
    if (!plant) return res.status(404).json({ message: 'Plant not found' });
    res.json(plant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Add Plant (WITH IMAGE UPLOAD)
const addPlant = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    const { name, price, description, care, type } = req.body;
    let imgUrl = '';
    let public_id = '';

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: 'plants',
      });

      imgUrl = result.secure_url;
      public_id = result.public_id;

      // delete temp file
      fs.unlinkSync(req.file.path);
    }

    const plant = new Plant({
      name,
      price,
      img: imgUrl,
      description,
      care,
      type,
      public_id,
    });

    const savedPlant = await plant.save();
    res.status(201).json(savedPlant);

  } catch (error) {
    console.error("ERROR:", error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update Plant
const updatePlant = async (req, res) => {
  try {
    const plant = await Plant.findById(req.params.id);
    if (!plant) return res.status(404).json({ message: 'Plant not found' });

    const { name, price, description, care, type } = req.body;

    // 🔥 delete old image if exists
    if (req.file && plant.public_id) {
      await cloudinary.uploader.destroy(plant.public_id);
    }

    // upload new image
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: 'plants',
      });

      plant.img = result.secure_url;
      plant.public_id = result.public_id;

      fs.unlinkSync(req.file.path);
    }

    // update fields
    plant.name = name || plant.name;
    plant.price = price || plant.price;
    plant.description = description || plant.description;
    plant.care = care || plant.care;
    plant.type = type || plant.type;

    const updatedPlant = await plant.save();
    res.json(updatedPlant);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete Plant
const deletePlant = async (req, res) => {
  try {
    const plant = await Plant.findById(req.params.id);
    if (!plant) return res.status(404).json({ message: 'Plant not found' });

    // 🔥 delete image from cloudinary
    if (plant.public_id) {
      await cloudinary.uploader.destroy(plant.public_id);
    }

    await plant.deleteOne();

    res.json({ message: 'Plant deleted successfully' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Export
export {
  getPlants,
  getPlantById,
  addPlant,
  updatePlant,
  deletePlant
};