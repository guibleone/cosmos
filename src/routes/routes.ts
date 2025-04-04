import { Router } from "express";
import astros from "./astros.routes";
import renders from "./renders.routes";

const apiRouter = Router();
apiRouter.use("/astros", astros);

const renderRoutes = Router();
renderRoutes.use(renders);

export default { apiRouter, renderRoutes };
