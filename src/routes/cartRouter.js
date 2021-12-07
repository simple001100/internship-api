import { Router } from "express";
import { getCart } from "../controllers/cartController.js";
import { authHandler } from "../middleware/authMiddleware.js";

const router = new Router();

router.get("/", authHandler, getCart);

export default router;