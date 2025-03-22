import "dotenv/config";
import express from "express";
import logger from "./middlewares/logger";
import astroRouter from "./routes/astros";
import errorHandler from "./middlewares/errorHandler";

const app = express();
const PORT = process.env.PORT ? process.env.PORT : 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(logger);
app.use("/api/astros", astroRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("Running server on PORT: " + PORT);
});
