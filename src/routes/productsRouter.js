import { Router } from "express";
import productsControllers from "../controllers/productsControllers.js";

const router = new Router();

router.get("/", productsControllers.getProducts);
router.get("/:id", productsControllers.getProductById);

export default router;
