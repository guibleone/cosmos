import { Request, Response } from "express";
import sql from "../config/db";
import { Astro } from "../config/interfaces";

// GET all astros handler
export async function getAllAstros(request: Request, response: Response) {
  try {
    const astros = await sql<Astro[]>`SELECT * FROM astros`;
    response.send(astros);
  } catch (error) {
    throw error;
  }
}
