import { Router } from "express";
import { healthCheck } from "../controllers/healthCheck.controller.js";

const router = Router()

router.route("/").get(healthCheck)
// router.get("/",healthCheck) -> this will also work

export default router;