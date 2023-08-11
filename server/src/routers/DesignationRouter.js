import { addDesignation, getDesignation } from "../controllers/DesignationController.js";
import express from "express";

const router = express.Router()

router.post('/add-designation', addDesignation)

router.get('/get-designation', getDesignation)

export default router;