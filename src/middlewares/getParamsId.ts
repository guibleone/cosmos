import { NextFunction, Request, Response } from "express";
import { HttpError } from "../utils/errors";

export default function getParamsId(
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
