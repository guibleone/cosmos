import { Router } from "express";
import {
  createAstro,
  deleteAstro,
  getAllAstros,
  getAstroById,
  updateAstro,
} from "../handlers/astros";

const router = Router();

// GET all astros
router.get("/", getAllAstros);

// GET Astro by id
router.get("/:id", getAstroById);

// POST Create new astro
// TODO: This route will require authenticated user.
router.post("/", createAstro);

// PATCH Update astro by id
// TODO: This route will require authenticated user.
router.patch("/:id", updateAstro)

// DELETE astro
// TODO: This route will require authenticated user.
router.delete("/:id", deleteAstro);

export default router;
