 import { Router } from "express";
import { healthCheck } from "../controllers/healthCheck";

 const router = Router()

router.get("/").get(healthCheck)

 export { router }