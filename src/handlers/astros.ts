import { NextFunction, Request, Response } from "express";
import sql from "../config/db";
import { CreateAstroDto, UpdateAstroDto } from "../dto/astros.dto";
import { createAstroSchema, updateAstroSchema } from "../schemas/astros.schema";
import { HttpError } from "../config/errors";
import { Astro } from "../types/astro";

// Helper function to find astro by id on data base
async function findAstroById(id: number): Promise<Astro> {
  try {
    const [astro] = await sql<
      Astro[]
    >`SELECT * FROM astros WHERE id_astro=${id}`;
    if (!astro) {
      throw new HttpError(404, `Astro com id = ${id} não econtrado.`);
    }
    return astro;
  } catch (error) {
    throw error;
  }
}

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
  try {
    const { id_astro } = request;
    const astro = await findAstroById(id_astro);
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
    const { id_astro } = request;

    const astro = request.body;

    // Verify body astro data
    updateAstroSchema.parse(astro);

    const foundAstro = await findAstroById(id_astro);
    const updatedAstro = { ...astro, updated_at: new Date() };

    await sql`UPDATE astros SET ${
      Object.keys(astro).length === 0 ? sql(foundAstro) : sql(updatedAstro)
    } WHERE id_astro = ${id_astro}`;

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
    const { id_astro } = request;

    const [astro] = await sql<
      Astro[]
    >`DELETE FROM astros WHERE id_astro=${id_astro} RETURNING *`;
    if (!astro) {
      throw new HttpError(404, `Astro com id = ${id_astro} não econtrado.`);
    }

    respose.sendStatus(204);
  } catch (error) {
    next(error);
  }
}
