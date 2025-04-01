import { z } from "zod";

export const createAstroSchema = z.object({
  name: z
    .string({
      required_error: "Nome deve ser preenchido.",
      invalid_type_error: "Nome deve ser uma string.",
    })
    .min(3, { message: "Nome deve ter no mínimo 3 caracteres." })
    .max(100, { message: "Nome deve ter no máximo 100 caracteres." }),
  category: z
    .string({
      required_error: "Insira a categoria do astro.",
      invalid_type_error: "Categoria deve ser uma string.",
    })
    .min(3, { message: "Categoria deve ter no mínimo 3 caracteres." })
    .max(100, { message: "Categoria deve ter no máximo 50 caracteres." }),
  description: z
    .string({
      invalid_type_error: "Descrição deve ser uma string.",
    })
    .min(5, { message: "Descrição deve ter no mínimo 5 caracteres." })
    .max(255, { message: "Descrição deve ter no máximo 255 caracteres." })
    .optional(),
  image_url: z
    .string({
      invalid_type_error: "URL da imagem deve ser uma string.",
    })
    .optional(),
  distance_sun: z.coerce.number({
    required_error: "Insira a distância do sol do astro.",
    invalid_type_error: "Distância do sol deve ser um número.",
  }),
  weight: z.coerce.number({
    required_error: "Insira o peso do astro.",
    invalid_type_error: "Peso deve ser um número.",
  }),
});

export const updateAstroSchema = createAstroSchema.partial();
