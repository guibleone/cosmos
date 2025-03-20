import "dotenv/config";
import express from "express";
import { logRequests } from "./middlewares/logger";
import astroRouter from "./routes/astros";

const app = express();
const PORT = process.env.PORT ? process.env.PORT : 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(logRequests);
app.use("/api/astros", astroRouter);

app.listen(PORT, () => {
  console.log("Running server on PORT: " + PORT);
});
