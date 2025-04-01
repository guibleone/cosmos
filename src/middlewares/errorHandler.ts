import { NextFunction, Request, Response } from "express";
import { PostgresError } from "postgres";
import { HttpError } from "../utils/errors";
import { ZodError } from "zod";

export default function errorHandler(
  error: HttpError | PostgresError | Error | ZodError,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (error instanceof HttpError) {
    if (error.status === 404) {
      response
        .status(error.status)
        .render("partials/errors/not-found.ejs", { error });
    }
    if (error.status === 400) {
      response
        .status(error.status)
        .render("partials/errors/invalid-request.ejs", { error });
    }
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
  console.log(error.stack);
}
