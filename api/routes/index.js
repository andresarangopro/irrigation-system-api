import express from 'express';
import IrrigationRoute from './IrrigationRoute.js';

const router = express.Router();

router.use("/api", IrrigationRoute)

export default router;