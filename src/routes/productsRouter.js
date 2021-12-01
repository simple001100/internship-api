import { Router } from "express";
import { getPhones } from "../controllers/productsControllers.js";
import { getSsds } from "../controllers/productsControllers.js";
import { getProcessors } from "../controllers/productsControllers.js";
import { getVideocards } from "../controllers/productsControllers.js";
import { getWatches } from "../controllers/productsControllers.js";
import { getLaptops } from "../controllers/productsControllers.js";

const router = new Router();

router.get("/phone", getPhones);
router.get("/laptops", getLaptops);
router.get("/ssds", getSsds);
router.get("/processors", getProcessors);
router.get("/videocards", getVideocards);
router.get("/watches", getWatches);

export default router;
