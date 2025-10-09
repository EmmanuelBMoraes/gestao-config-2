export interface Filme {
  id: number;
  titulo: string;
  diretor: string;
  ano: number;
}

export const filmes: Filme[] = [
  {
    id: 1,
    titulo: "Cidade de Deus",
    diretor: "Fernando Meirelles, Kátia Lund",
    ano: 2002,
  },
  {
    id: 2,
    titulo: "Tropa de Elite",
    diretor: "José Padilha",
    ano: 2007,
  },
  {
    id: 3,
    titulo: "O Auto da Compadecida",
    diretor: "Guel Arraes",
    ano: 2000,
  },
  {
    id: 4,
    titulo: "Bacurau",
    diretor: "Kleber Mendonça Filho, Juliano Dornelles",
    ano: 2019,
  },
];

export let proximoId =
  filmes.length > 0 ? Math.max(...filmes.map((f) => f.id)) + 1 : 1;
export const obterProximoId = () => proximoId++;
