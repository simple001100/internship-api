import { Router } from "express";
import cartController from "../controllers/cartController.js";
import { authHandler } from "../middleware/authMiddleware.js";

const router = new Router();

router.get("/", authHandler, cartController.getCart);

export default router;