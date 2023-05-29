import { Livro } from "./livros";

// Definindo o tipo para um autor
type Autor = {
  nome: string;
  livros: Livro[];
};

// Criando o map de união entre autor e livro
const bibliotecas: Map<Autor, Livro[]> = new Map();

export { Autor, bibliotecas };
