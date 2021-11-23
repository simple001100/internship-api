import { Router } from "express";
import producRouter from "./productsRouter.js";

const router = new Router();

router.use("/products", producRouter);

export default router;
