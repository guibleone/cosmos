import { NextFunction, Request, Response } from "express";
import { PostgresError } from "postgres";
import { HttpError } from "../config/errors";
import { ZodError } from "zod";

export default function errorHandler(
  error: HttpError | PostgresError | Error | ZodError,
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
  } else if (error instanceof ZodError) {
    // response.status(400).send({
    //   name: error.name,
    //   fields: error.issues.map((issue) => issue.path),
    //   messages: error.issues.map((issue) => issue.message),
    // });
    response.render("partials/errors/zod-error", { error });
  } else {
    response.status(400).send({
      name: error.name || "Error",
      error: error.message || "Erro desconhecido",
    });
  }
}
