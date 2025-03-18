import { Router } from "express";
import { getAllAstros } from "../handlers/astros";

const router = Router();

// GET all astros
router.get("/", getAllAstros);

export default router;
