import { z } from "zod";
import { createAstroSchema } from "../config/schemas";

export type CreateAstroDto = z.infer<typeof createAstroSchema>;
