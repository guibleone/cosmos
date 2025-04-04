import { Astro } from "../astro";

declare global {
  namespace Express {
    interface Request {
      id_astro: number;
      astros: Astro[];
      render: string;
      astro: Astro;
    }
  }
}
