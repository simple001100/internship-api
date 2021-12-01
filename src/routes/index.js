import { Router } from "express";
import productsRouter from "./productsRouter.js";
import userRouter from "./usersRouter.js"

const router = new Router();

router.use("/product", productsRouter);
router.use("/user", userRouter);

export default router;
