import { Router, Request, Response } from "express";
import { Filme, filmes, obterProximoId } from "./data";

const routes = Router();

routes.get("/api/filmes", (req: Request, res: Response) => {
  console.log("Rota GET /api/filmes acessada.");
  return res.status(200).json(filmes);
});

routes.post("/api/filmes", (req: Request, res: Response) => {
  const { titulo, diretor, ano } = req.body;

  if (!titulo || !diretor || !ano) {
    return res
      .status(400)
      .json({ mensagem: "Título, diretor e ano são obrigatórios." });
  }

  const novoFilme: Filme = {
    id: obterProximoId(),
    titulo,
    diretor,
    ano,
  };

  filmes.push(novoFilme);
  console.log("Novo filme adicionado:", novoFilme);
  return res.status(201).json(novoFilme);
});

export default routes;
