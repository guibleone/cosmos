import { Router } from "express";
import renders from "../handlers/renders.handler";
import {
  fetchAllAstros,
  fetchAstroById,
  getParamsId,
} from "../middlewares/astros.middelware";

const router = Router();

// pages
router.get("/", renders.homepage);
router.get("/astros", fetchAllAstros, renders.astros);
router.get("/astros/:id", getParamsId, fetchAstroById, renders.astrosDetail);

export default router;
