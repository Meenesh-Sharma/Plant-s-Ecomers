
import express from 'express';
import multer from 'multer';

import {
  getPlants,
  getPlantById,
  addPlant,
  updatePlant,
  deletePlant,
} from '../controllers/plants.js';

const router = express.Router();

const upload = multer({ dest: 'uploads/' });

router.get('/', getPlants);
router.get('/:id', getPlantById);
router.post('/', upload.single('image'), addPlant);
router.put('/:id', upload.single('image'), updatePlant);
router.delete('/:id', deletePlant);

export default router;
