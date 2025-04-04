import { Router } from "express";
import {
  createAstro,
  deleteAstro,
  getAllAstros,
  getAstroById,
  getEditForm,
  updateAstro,
} from "../handlers/astros.handler";
import { getParamsId } from "../middlewares/astros.middelware";

const router = Router();

// GET all astros
router.get("/", getAllAstros);

// GET Astro by id
router.get("/:id", getParamsId, getAstroById);

// POST Create new astro
// TODO: This route will require authenticated user.
router.post("/", createAstro);

// PATCH Update astro by id
// TODO: This route will require authenticated user.
router.patch("/:id", getParamsId, updateAstro);
// This route returns a edit form to the client
router.get("/:id/edit", getParamsId, getEditForm);

// DELETE astro
// TODO: This route will require authenticated user.
router.delete("/:id", getParamsId, deleteAstro);

export default router;
