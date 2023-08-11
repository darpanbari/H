import { addDepartment, getDepartment } from "../controllers/DepartmentController.js";
import express from "express";

const router = express.Router()

router.post('/add-department', addDepartment)

router.get('/get-department', getDepartment)

export default router;