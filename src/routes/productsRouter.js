import { Router } from "express";
import { getProducts } from "../controllers/productsControllers.js";
import { getProductById } from "../controllers/productsControllers.js";

const router = new Router();

router.get("/", getProducts);
router.get("/:id", getProductById);

export default router;
