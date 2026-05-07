import express from "express";
import { getWeatherByCity } from '../controllers/weatherController.js'
const router = express.Router();
router.get("/weather/:city", getWeatherByCity);

export default router;