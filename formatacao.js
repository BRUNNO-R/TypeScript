"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatarNome = void 0;
// Função para formatar o nome do livro
var formatarNome = function (nome) {
    return nome.split(" ").length === 1 ? nome.toUpperCase() : nome.toLowerCase();
};
exports.formatarNome = formatarNome;
