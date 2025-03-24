import { NextFunction, Request, Response } from "express";
import sql from "../config/db";
import { Astro } from "../config/interfaces";
import { CreateAstroDto, UpdateAstroDto } from "../dto/astros.dto";
import { createAstroSchema, updateAstroSchema } from "../config/schemas";
import { HttpError } from "../config/errors";

// GET all astros handler
export async function getAllAstros(request: Request, response: Response) {
  const astros = await sql<Astro[]>`SELECT * FROM astros`;
  response.send(astros);
}

// GET Astro by id
export async function getAstroById(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { id } = request.params;
  try {
    const parsedId = parseInt(id);
    if (isNaN(parsedId) || id === undefined) {
      throw new HttpError(400, "ID inserido inválido");
    }

    const [astro] = await sql<
      Astro[]
    >`SELECT * FROM astros WHERE id_astro=${parsedId}`;
    if (!astro) {
      throw new HttpError(404, `Astro com id = ${parsedId} não econtrado.`);
    }

    response.status(200).send(astro);
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
    const { id } = request.params;

    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      throw new HttpError(400, "ID inserido inválido");
    }

    const astro = request.body;

    // Verify body astro data
    updateAstroSchema.parse(astro);

    const [foundAstro] = await sql<
      Astro[]
    >`SELECT * FROM astros WHERE id_astro = ${parsedId}`;
    if (!foundAstro) {
      throw new HttpError(404, `Astro com id = ${parsedId} não econtrado.`);
    }

    const updatedAstro = { ...astro, updated_at: new Date() };

    await sql`UPDATE astros SET ${
      Object.keys(astro).length === 0 ? sql(foundAstro) : sql(updatedAstro)
    } WHERE id_astro = ${parsedId}`;

    response.status(200).send(`<p>Astro atualizado com sucesso!</p>`);
  } catch (error) {
    next(error);
  }
}

// DELETE Astro
export async function deleteAstro(
  request: Request,
  respose: Response,
  next: NextFunction
) {
  try {
    const { id } = request.params;

    const parsedId = parseInt(id);
    if (isNaN(parsedId) || id === undefined) {
      throw new HttpError(400, "ID inserido inválido");
    }

    const [astro] = await sql<
      Astro[]
    >`DELETE FROM astros WHERE id_astro=${id} RETURNING *`;
    if (!astro) {
      throw new HttpError(404, `Astro com id = ${parsedId} não econtrado.`);
    }

    respose.sendStatus(204);
  } catch (error) {
    next(error);
  }
}
