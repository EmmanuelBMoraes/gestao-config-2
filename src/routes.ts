import { Router, Request, Response } from "express";
import { filmes } from "./data";

const routes = Router();

routes.get("/api/filmes", (req: Request, res: Response) => {
  console.log("Rota GET /api/filmes acessada.");
  return res.status(200).json(filmes);
});

export default routes;
