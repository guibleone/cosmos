import { z } from "zod";
import { createAstroSchema, updateAstroSchema } from "../config/schemas";

export type CreateAstroDto = z.infer<typeof createAstroSchema>;
export type UpdateAstroDto = z.infer<typeof updateAstroSchema>;
