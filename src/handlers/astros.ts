import { Request, Response } from "express";

// GET all astros handler
export function getAllAstros(request: Request, response: Response) {
  response.send("Get all astros route.");
}
