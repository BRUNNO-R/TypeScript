"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var formatacao_1 = require("./formatacao");
var autorLivro_1 = require("./autorLivro");
// Importando o array de livros
var livros_1 = require("./livros");
// Imprimindo nome, preço e categoria de todos os livros
livros_1.biblioteca.forEach(function (livro) {
    console.log("Nome: ".concat(livro.nome));
    console.log("Pre\u00E7o: ".concat(livro.preco));
    console.log("Categoria: ".concat(livro.categoria || "Não especificada"));
    console.log("--------------------");
});
// Imprimindo o nome formatado de um livro
var nomeFormatado = (0, formatacao_1.formatarNome)("Livro com Mais de Uma Palavra");
console.log("Nome formatado: ".concat(nomeFormatado));
// Acessando e imprimindo os livros de cada biblioteca
autorLivro_1.bibliotecas.forEach(function (livros, autor) {
    console.log("Autor: ".concat(autor.nome));
    console.log("Livros:");
    livros.forEach(function (livro) {
        var nomeFormatado = (0, formatacao_1.formatarNome)(livro.nome);
        var categoria = livro.categoria || "Não especificada";
        console.log("  Nome: ".concat(nomeFormatado));
        console.log("  Pre\u00E7o: ".concat(livro.preco));
        console.log("  Categoria: ".concat(categoria));
        console.log("--------------------");
    });
});
