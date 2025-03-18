import { NextFunction, Request, Response } from "express";
import chalk from "chalk";

const log = console.log;

export function logRequests(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { url, method } = request;
  log(
    chalk.blue(method) +
      "\t" +
      chalk.white(url) +
      "\t" +
      chalk.yellow("HTTP/" + request.httpVersion)
  );
  next();
}
