import { addLocation, getLocation } from "../controllers/LocationController.js";
import express from "express";

const router = express.Router()

router.post('/add-location', addLocation)

router.get('/get-location', getLocation)

export default router;