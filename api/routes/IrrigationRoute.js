import express from 'express';

import IrrigationController from '../controllers/IrrigationController.js';
const router = express.Router();

router.get("/state", IrrigationController.getState)

export default router;