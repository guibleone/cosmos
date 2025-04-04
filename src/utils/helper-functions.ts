import { Astro } from "../types/astro";
import { solarSystem } from "./consts";
import sql from "./db";
import { HttpError } from "./errors";

// Helper function to build and execute query
export async function fetchAstros(
  search = "",
  category = "",
  filter = "",
  limit = 10,
  offset = 0
): Promise<Astro[]> {
  const baseQuery = sql`SELECT * FROM astros`;
  const limitOffset = sql`LIMIT ${limit} OFFSET ${offset}`;

  if (filter?.trim() === "solar-system") {
    return await sql<Astro[]>`${baseQuery} 
        WHERE name in ${sql(solarSystem)} ${limitOffset}
      `;
  }

  if (filter?.trim() === "main-moons") {
    return await sql<Astro[]>`${baseQuery} 
    WHERE category = 'Lua' ${limitOffset}
  `;
  }

  if (filter?.trim() === "recommended-astros") {
    if (!category || !search) {
      throw new HttpError(
        400,
        "Parâmetros 'category' e 'search' (nome) são obrigatórios para recomendados."
      );
    }

    return await sql<Astro[]>`${baseQuery}
      WHERE category = ${category} AND name != ${search}
      ${limitOffset}`;
  }

  if (search?.trim() && category?.trim()) {
    return await sql<Astro[]>`${baseQuery} 
      WHERE unaccent(name) ILIKE unaccent(${"%" + search + "%"}) 
      AND category = ${category}  ${limitOffset}`;
  }

  if (search?.trim()) {
    return await sql<Astro[]>`${baseQuery} 
      WHERE unaccent(name) ILIKE unaccent(${
        "%" + search + "%"
      })  ${limitOffset}`;
  }
  if (category?.trim()) {
    return await sql<
      Astro[]
    >`${baseQuery} WHERE category = ${category} ${limitOffset}`;
  }

  return await sql<Astro[]>`${baseQuery} ${limitOffset}`;
}

// Helper function to find astro by id on data base
export async function findAstroById(id: number): Promise<Astro> {
  try {
    const [astro] = await sql<
      Astro[]
    >`SELECT * FROM astros WHERE id_astro=${id}`;
    if (!astro) {
      throw new HttpError(404, `Astro com id ${id} não econtrado.`);
    }
    return astro;
  } catch (error) {
    throw error;
  }
}
