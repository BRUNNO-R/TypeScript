import { Livro } from "./livros";
import { Categoria } from "./categoria";
import { formatarNome } from "./formatacao";
import { Autor, bibliotecas } from "./autorLivro";

// Importando o array de livros
import { biblioteca } from "./livros";

// Imprimindo nome, preço e categoria de todos os livros
biblioteca.forEach(livro => {
  console.log(`Nome: ${livro.nome}`);
  console.log(`Preço: ${livro.preco}`);
  console.log(`Categoria: ${livro.categoria || "Não especificada"}`);
  console.log("--------------------");
});

// Imprimindo o nome formatado de um livro
const nomeFormatado = formatarNome("Livro com Mais de Uma Palavra");
console.log(`Nome formatado: ${nomeFormatado}`);

// Acessando e imprimindo os livros de cada biblioteca
bibliotecas.forEach((livros, autor) => {
  console.log(`Autor: ${autor.nome}`);
  console.log("Livros:");
  livros.forEach(livro => {
    const nomeFormatado = formatarNome(livro.nome);
    const categoria = livro.categoria || "Não especificada";
    console.log(`  Nome: ${nomeFormatado}`);
    console.log(`  Preço: ${livro.preco}`);
    console.log(`  Categoria: ${categoria}`);
    console.log("--------------------");
  });
});
