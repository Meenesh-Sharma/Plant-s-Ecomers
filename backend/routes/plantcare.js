import express from 'express';
const router = express.Router();

import {
  createPlantCare,
  getAllPlants,
  getSinglePlant,
  updatePlant,
  deletePlant,
} from '../controllers/plantcare.js';

router.post('/', createPlantCare);
router.get('/', getAllPlants);
router.get('/:id', getSinglePlant);
router.put('/:id', updatePlant);
router.delete('/:id', deletePlant);

export default router;