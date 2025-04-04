import { NextFunction, Request, Response } from "express";
import sql from "../utils/db";
import { CreateAstroDto, UpdateAstroDto } from "../dto/astros.dto";
import { createAstroSchema, updateAstroSchema } from "../schemas/astros.schema";
import { HttpError } from "../utils/errors";
import { Astro, QueryParams } from "../types/astro";
import { fetchAstros, findAstroById } from "../utils/helper-functions";

// GET all astros handler
export async function getAllAstros(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const {
    search,
    category,
    filter,
    limit: limitStr = "10",
    offset: offsetStr = "0",
  } = request.query as QueryParams;

  const limit = parseInt(limitStr, 10) || 10;
  const offset = parseInt(offsetStr, 10) || 0;

  try {
    const astros = await fetchAstros(search, category, filter, limit, offset);
    response.send(astros);
  } catch (error) {
    next(error);
  }
}

// GET Astro by id
export async function getAstroById(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    const { id_astro } = request;
    const astro = await findAstroById(id_astro);
    response.send(astro);
  } catch (error) {
    next(error);
  }
}

// POST Create new astro
export async function createAstro(
  request: Request<{}, {}, CreateAstroDto>,
  response: Response,
  next: NextFunction
) {
  try {
    const astro = request.body;

    createAstroSchema.parse(astro);

    await sql`INSERT INTO astros ${sql(astro)}`;

    response.set("HX-Trigger", "updateAstros");
    response.status(201).send(`<p>Astro criado com sucesso!</p>`);
  } catch (error) {
    next(error);
  }
}

// PATCH Update astro by id
export async function updateAstro(
  request: Request<{ id: string }, {}, UpdateAstroDto>,
  response: Response,
  next: NextFunction
) {
  try {
    const { id_astro } = request;

    const astro = request.body;
    console.log(astro);

    // Verify body astro data
    updateAstroSchema.parse(astro);

    const foundAstro = await findAstroById(id_astro);
    const updatedAstro = { ...foundAstro, ...astro, updated_at: new Date() };

    await sql`UPDATE astros SET ${sql(
      updatedAstro
    )} WHERE id_astro = ${id_astro}`;

    response.status(200).render("pages/astro", { astro: updatedAstro });
  } catch (error) {
    next(error);
  }
}

export async function getEditForm(
  request: Request<{ id: string }, {}, UpdateAstroDto>,
  response: Response,
  next: NextFunction
) {
  try {
    const { id_astro } = request;

    const astro = await findAstroById(id_astro);

    response.status(200);
    response.render("partials/edit-astro-form", { astro });
  } catch (error) {}
}

// DELETE Astro
export async function deleteAstro(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    const { id_astro } = request;

    const [astro] = await sql<
      Astro[]
    >`DELETE FROM astros WHERE id_astro=${id_astro} RETURNING *`;
    if (!astro) {
      throw new HttpError(404, `Astro com id = ${id_astro} não econtrado.`);
    }

    response.set("HX-Location", "/");
    response.sendStatus(204);
  } catch (error) {
    next(error);
  }
}
