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

routes.delete("/api/filmes/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  const indice = filmes.findIndex((filme) => filme.id === parseInt(id!));
  if (indice === -1) {
    return res.status(404).json({ mensagem: "Filme não encontrado." });
  }
  const filmeRemovido = filmes.splice(indice, 1);
  console.log("Filme removido:", filmeRemovido[0]);
  return res.status(204).send();
});

export default routes;
