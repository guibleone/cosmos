import { NextFunction, Request, Response } from "express";
/**
 * Pages
 */

async function homepage(request: Request, response: Response) {
  return response.render("layout", {
    main: "homepage",
    title: "Explore o Cosmos",
  });
}

async function astros(request: Request, response: Response) {
  const { astros, render } = request;

  switch (render) {
    case "not-found":
      return response.render("layout", {
        main: "astros",
        title: "Astros | Explore o Cosmos",
        astros,
        notFound: "Nenhum astro encontrado.",
      });
    case "comets-names":
      return response.render("partials/home/comets-names", {
        comets: astros.map(({ id_astro, name }) => ({ id_astro, name })),
      });
    case "astros-gallery":
      return response.render("partials/astros-gallery", { astros });
    default:
      return response.render("layout", {
        main: "astros",
        title: "Astros | Explore o Cosmos",
        astros,
      });
  }
}

async function astrosDetail(request: Request, response: Response) {
  const { astro, render } = request;

  if (render === "selected-comet") {
    return response.render("partials/home/selected-comet", { comet: astro });
  } else {
    return response.render("astro", { astro });
  }
}

export default { homepage, astros, astrosDetail };
