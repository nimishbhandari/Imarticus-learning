import express from "express";
import { addCourse, getCourses } from "../controllers/courseController.js";

const router = express.Router();

router.route("/").post(addCourse).get(getCourses);

export default router;
