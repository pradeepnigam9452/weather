import express from 'express';
import {createFavoriteCity,deleteCity ,allFavoriteCity} from '../controllers/CityController.js';
const router = express.Router();
import authMiddleware from '../middleware/auth.js'

router.get("/allFavoriteCity",authMiddleware,allFavoriteCity);
router.post('/createFavoriteCity',authMiddleware, createFavoriteCity);
router.delete("/delete/:id", deleteCity);


export default router;
