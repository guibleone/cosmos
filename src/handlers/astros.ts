import { NextFunction, Request, Response } from "express";
import sql from "../config/db";
import { Astro } from "../config/interfaces";
import { CreateAstroDto } from "../dto/astros.dto";
import { HttpError } from "../config/errors";

// GET all astros handler
export async function getAllAstros(request: Request, response: Response) {
  const astros = await sql<Astro[]>`SELECT * FROM astros`;
  response.send(astros);
}

// POST Create new astro
export async function createAstro(
  request: Request<{}, {}, CreateAstroDto>,
  response: Response,
  next: NextFunction
) {
  try {
    const astro = request.body;

    if (!astro.name) {
      throw new HttpError(400, "Insira o nome de um astro.");
    }

    await sql`INSERT INTO astros ${sql(astro)}`;

    response.status(201).send(`<p>Astro criado com sucesso!</p>`);
  } catch (error) {
    next(error);
  }
}
