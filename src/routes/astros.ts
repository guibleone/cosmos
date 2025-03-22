import { Router } from "express";
import { createAstro, getAllAstros } from "../handlers/astros";

const router = Router();

// GET all astros
router.get("/", getAllAstros);

// POST Create new astro 
// TODO: This route will require authenticated user.
router.post("/", createAstro);

export default router;
