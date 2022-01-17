import { Router } from "express";
import cartController from "../controllers/cartController.js";
import { authHandler } from "../middleware/authMiddleware.js";

const router = new Router();

router.get("/", authHandler, cartController.getCart);
router.post("/", authHandler, cartController.addToCart);
router.delete("/", authHandler, cartController.deleteFromCart);
router.patch("/", authHandler, cartController.updateCart);

export default router;