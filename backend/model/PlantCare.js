import mongoose from 'mongoose';

const careSchema = new mongoose.Schema({
  type: String,
  tip: String,
});

const plantCareSchema = new mongoose.Schema(
  {
    plantName: String,
    plantType: String,
    care: [careSchema],
  },
  { timestamps: true }
);

// VERY IMPORTANT
const PlantCare = mongoose.model('PlantCare', plantCareSchema);

export default PlantCare;