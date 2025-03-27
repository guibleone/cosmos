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

// Helper function to build and execute query
async function fetchAstros(
  search?: string,
  category?: string
): Promise<Astro[]> {
  const baseQuery = sql<Astro[]>`SELECT * FROM astros`;

  if (search?.trim() && category?.trim()) {
    return await sql<Astro[]>`${baseQuery} 
      WHERE unaccent(name) ILIKE unaccent(${"%" + search + "%"}) 
      AND category = ${category}`;
  }
  if (search?.trim()) {
    return await sql<Astro[]>`${baseQuery} 
      WHERE unaccent(name) ILIKE unaccent(${"%" + search + "%"})`;
  }
  if (category?.trim()) {
    return await sql<Astro[]>`${baseQuery} WHERE category = ${category}`;
  }

  return await baseQuery;
}

// GET all astros handler
export async function getAllAstros(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const searchParam = request.query.search as string | undefined;
  const category = request.query.category as string | undefined;

  try {
    const astros = await fetchAstros(searchParam, category);

    if (astros.length === 0) {
      response.status(200).send("<p>Nenhum astro encontrado.</p>");
    } else {
      response.render("partials/astros", { astros });
    }
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
    response.render("astro", { astro });
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
