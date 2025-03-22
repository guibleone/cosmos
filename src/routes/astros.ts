import { Router } from "express";
import {
  createAstro,
  deleteAstro,
  getAllAstros,
  getAstroById,
} from "../handlers/astros";

const router = Router();

// GET all astros
router.get("/", getAllAstros);

// GET Astro by id
router.get("/:id", getAstroById);

// POST Create new astro
// TODO: This route will require authenticated user.
router.post("/", createAstro);

// DELETE astro
router.delete("/:id", deleteAstro);

export default router;
