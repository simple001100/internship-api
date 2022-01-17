import { Router } from "express";
import productsRouter from "./productsRouter.js";
import userRouter from "./usersRouter.js"
import cartRouter from "./cartRouter.js"

const router = new Router();

router.use("/product", productsRouter);
router.use("/user", userRouter);
router.use("/cart", cartRouter);

export default router;
