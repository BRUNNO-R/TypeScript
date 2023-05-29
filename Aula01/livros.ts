// Definindo o tipo para um livro
import { Categoria } from "./categoria";
type Livro = {
    nome: string;
    preco: number;
    categoria?: Categoria;
  };
  
  // Criando o array de livros da biblioteca
  const biblioteca: Livro[] = [
    {
      nome: "Livro 1",
      preco: 29.99,
      categoria: Categoria.FICCAO
    },
    {
      nome: "Livro 2",
      preco: 39.99,
      categoria: Categoria.FANTASIA
    },
    {
      nome: "Livro 3",
      preco: 24.99,
      categoria: Categoria.CIENTIFICA
    },
  ];
  
  // Imprimindo nome, preço e categoria de todos os livros
  biblioteca.forEach(livro => {
    console.log(`Nome: ${livro.nome}`);
    console.log(`Preço: ${livro.preco}`);
    console.log(`Categoria: ${livro.categoria || "Não especificada"}`);
    console.log("--------------------");
  });
  
  export { Livro, biblioteca };
  