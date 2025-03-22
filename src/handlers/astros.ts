import { NextFunction, Request, Response } from "express";
import sql from "../config/db";
import { Astro } from "../config/interfaces";
import { CreateAstroDto } from "../dto/astros.dto";
import { createAstroSchema } from "../config/schemas";
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
    if (!parsedId) {
      throw new HttpError(400, "ID inserido inválido");
    }

    const [astro] = await sql<
      Astro[]
    >`SELECT * FROM astros WHERE id_astro=${id}`;
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

// DELETE Astro
export async function deleteAstro(
  request: Request,
  respose: Response,
  next: NextFunction
) {
  const { id } = request.params;
  try {
    const parsedId = parseInt(id);
    if (!parsedId) {
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
