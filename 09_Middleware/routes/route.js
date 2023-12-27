import express from "express"
const router = express.Router()
import { homeController } from "../controllers/homeController.js"
import { aboutController } from "../controllers/aboutController.js"

router.get("/" , homeController)
router.get("/" , aboutController)

export default router