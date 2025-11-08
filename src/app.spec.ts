import request from "supertest";
import app from "./app";

describe("Testes da API", () => {
  it("Deve retornar todos os filmes", async () => {
    const res = await request(app).get("/api/filmes");
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("Deve adicionar um novo filme", async () => {
    const novoFilme = {
      titulo: "Inception",
      diretor: "Christopher Nolan",
      ano: 2010,
    };

    const res = await request(app).post("/api/filmes").send(novoFilme);
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.titulo).toBe(novoFilme.titulo);
  });

  it("Deve remover um filme existente", async () => {
    // Primeiro, adiciona um filme para garantir que existe
    const novoFilme = {
      titulo: "The Matrix",
      diretor: "The Wachowskis",
      ano: 1999,
    };
    const adicionarRes = await request(app).post("/api/filmes").send(novoFilme);
    const filmeId = adicionarRes.body.id;

    const res = await request(app).delete(`/api/filmes/${filmeId}`);
    expect(res.statusCode).toEqual(204);
  });

  it("Deve retornar 404 ao tentar remover um filme inexistente", async () => {
    const res = await request(app).delete("/api/filmes/9999");
    expect(res.statusCode).toEqual(404);
    expect(res.body).toHaveProperty("mensagem", "Filme não encontrado.");
  });

  it("Deve retornar 400 ao tentar adicionar um filme com dados incompletos", async () => {
    const filmeIncompleto = {
      titulo: "Interstellar",
      diretor: "Christopher Nolan",
      // ano está faltando
    };

    const res = await request(app).post("/api/filmes").send(filmeIncompleto);
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty(
      "mensagem",
      "Título, diretor e ano são obrigatórios."
    );
  });
});
