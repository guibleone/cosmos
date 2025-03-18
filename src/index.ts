import express from "express";
import { PORT } from "./config/constants";
import { logRequests } from "./middlewares/logger";
import astroRouter from "./routes/astros";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(logRequests);
app.use("/api/astros", astroRouter);

app.listen(PORT, () => {
  console.log("Running server on PORT: " + PORT);
});
