import "dotenv/config";
import express from "express";
import logger from "./middlewares/logger";
import astroRouter from "./routes/astros.routes";
import errorHandler from "./middlewares/errorHandler";
import path from "path";

import routes from "./routes/index";

const app = express();
const PORT = process.env.PORT ? process.env.PORT : 3000;

// Configurar EJS como motor de visualização
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// console logger
app.use(logger);

// render html pages
app.use("/", routes.renderRoutes);

// handle api requests
app.use("/api", routes.apiRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("Running server on PORT: " + PORT);
});
