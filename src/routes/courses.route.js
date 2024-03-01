import express from "express";
import CoursesController from "../app/controllers/Courses.controller.js";
const router = express.Router();

router.get("/:slug", CoursesController.show);

export default router;
