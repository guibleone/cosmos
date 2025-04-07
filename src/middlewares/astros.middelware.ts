import { NextFunction, Request, Response } from "express";
import { QueryParams } from "../types/astro";
import {
  fetchAstros,
  findAstroById,
  getAstrosQuantity,
} from "../utils/helper-functions";
import { HttpError } from "../utils/errors";

export async function fetchAllAstros(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const {
    search,
    category,
    filter,
    limit: limitStr = "9",
    offset: offsetStr = "0",
  } = request.query as QueryParams;

  const limit = parseInt(limitStr, 10) || 9;
  const offset = parseInt(offsetStr, 10) || 0;
  try {
    const astros = await fetchAstros(search, category, filter, limit, offset);
    const totalAstros = await getAstrosQuantity(category);

    const totalPage = Math.ceil(totalAstros / limit);
    const currentPage = Math.floor(offset / limit) + 1;
    const hasNext = offset + limit < totalAstros;
    const hasPrevious = offset > 0;

    const pagination = {
      currentPage,
      hasNext,
      hasPrevious,
      totalPage,
      offset,
      limit,
      category,
    };

    request.astros = astros;

    if (astros.length === 0) {
      request.render = "not-found";
    } else if (filter === "famous-comets") {
      request.render = "comets-names";
    } else if (filter === "recommended-astros") {
      request.render = "recommended-astros";
    } else if (filter === "search-results") {
      request.render = "search-results";
    } else if (filter) {
      request.render = "astros-gallery";
    } else {
      request.pagination = pagination;
      request.render = "astros";
    }
    next();
  } catch (error) {
    next(error);
  }
}

export function getParamsId(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    const { id } = request.params;
    const parsedId = parseInt(id);
    if (id === undefined || isNaN(parsedId)) {
      throw new HttpError(400, "ID inserido inválido");
    }
    request.id_astro = parsedId;
    next();
  } catch (error) {
    next(error);
  }
}

export async function fetchAstroById(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    const { id_astro } = request;
    const astro = await findAstroById(id_astro);
    const filter = request.query.filter as string | undefined;
    request.astro = astro;

    if (filter === "famous-comets") {
      request.render = "selected-comet";
    } else {
      request.render = "astro";
    }
    next();
  } catch (error) {
    next(error);
  }
}
