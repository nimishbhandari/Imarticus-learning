import express from "express";
import {
  addCourse,
  getCourseById,
  getCourses,
} from "../controllers/courseController.js";

const router = express.Router();

router.route("/").post(addCourse).get(getCourses);
router.route("/:id").get(getCourseById);

export default router;
