import { NextFunction, Request, Response } from "express";
import { PostgresError } from "postgres";
import { HttpError } from "../config/errors";

export default function errorHandler(
  error: HttpError | PostgresError | Error,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (error instanceof HttpError) {
    response
      .status(error.status)
      .send({ name: error.name, error: error.message });
  } else if (error instanceof PostgresError) {
    response.status(500);
    response.send({
      error: {
        name: error.name,
        message: error.message,
        detail: error.detail,
      },
    });
  } else {
    response.status(400).send({
      name: error.name || "Error",
      error: error.message || "Erro desconhecido",
    });
  }
}
