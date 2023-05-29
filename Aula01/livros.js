"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.biblioteca = void 0;
// Definindo o tipo para um livro
var categoria_1 = require("./categoria");
// Criando o array de livros da biblioteca
var biblioteca = [
    {
        nome: "Livro 1",
        preco: 29.99,
        categoria: categoria_1.Categoria.FICCAO
    },
    {
        nome: "Livro 2",
        preco: 39.99,
        categoria: categoria_1.Categoria.FANTASIA
    },
    {
        nome: "Livro 3",
        preco: 24.99,
        categoria: categoria_1.Categoria.CIENTIFICA
    },
];
exports.biblioteca = biblioteca;
// Imprimindo nome, preço e categoria de todos os livros
biblioteca.forEach(function (livro) {
    console.log("Nome: ".concat(livro.nome));
    console.log("Pre\u00E7o: ".concat(livro.preco));
    console.log("Categoria: ".concat(livro.categoria || "Não especificada"));
    console.log("--------------------");
});
