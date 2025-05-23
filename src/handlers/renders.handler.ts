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
  const { astros, render, pagination } = request;

  switch (render) {
    case "not-found":
      // return response.render("layout", {
      //   main: "astros",
      //   title: "Astros | Explore o Cosmos",
      //   astros,
      //   notFound: "Nenhum astro encontrado.",
      // });
      return response.render("partials/not-found-astro");
    case "comets-names":
      return response.render("partials/home/comets-names", {
        comets: astros.map(({ id_astro, name }) => ({ id_astro, name })),
      });
    case "recommended-astros":
      return response.render("partials/astro/recommended-astro", { astros });
    case "search-results":
      return response.render("partials/home/search-results", { astros });
    case "astros-gallery":
      return response.render("partials/astros-gallery", { astros, pagination });
    default:
      return response.render("layout", {
        main: "astros",
        title: "Astros | Explore o Cosmos",
        astros,
        pagination,
      });
  }
}

async function astrosDetail(request: Request, response: Response) {
  const { astro, render } = request;

  if (render === "selected-comet") {
    return response.render("partials/home/selected-comet", { comet: astro });
  } else {
    return response.render("layout", {
      main: "astro",
      title: astro.name + " | Explore o Cosmos",
      astro,
    });
  }
}

export default { homepage, astros, astrosDetail };
