import { Router } from "express";
import userController from "../controllers/userController.js";
import { body } from "express-validator";

const router = new Router();

router.post("/registration",
   body('login').isEmail(),
   body('password').isLength({ min: 4 }),
   body('firstName').notEmpty(),
   body('lastName').notEmpty(),
   userController.registration);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/refresh", userController.refresh);

export default router;