import express from "express";
import SiteController from "../app/controllers/Site.controller.js";
const router = express.Router();

router.get("/search", SiteController.search);
router.get("/", SiteController.home);

export default router;
