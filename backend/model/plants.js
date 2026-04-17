


import mongoose from 'mongoose';

const plantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  img: { type: String },
  description: { type: String },
  care: { type: String },
  type: { 
    type: String, 
    enum: ['indoor', 'outdoor', 'regular tree', 'fruit tree', 'water plant', 'home decoration'], 
    required: true 
  },
}, { timestamps: true });

const Plant = mongoose.model('Plant', plantSchema);

export default Plant;