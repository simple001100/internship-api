import { Router } from "express";
import { login, logout, refresh } from "../controllers/userController.js";

const router = new Router();

router.post("/login", login);
router.post("/logout", logout);
router.get("/refresh", refresh);

export default router;