import { Livro } from "./livros";

// Função para formatar o nome do livro
const formatarNome = (nome: string): string => {
  return nome.split(" ").length === 1 ? nome.toUpperCase() : nome.toLowerCase();
};

export { formatarNome };
