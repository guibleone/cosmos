import { Router } from "express";
import astros from "./astros.routes";

const apiRouter = Router();
apiRouter.use("/astros", astros);

export default { apiRouter };
