import express from "express"
import { aboutPage, homePage } from "../controllers/controls.js"
const router = express.Router()

router.get("/", homePage)
router.get("/about", aboutPage)

export default router
