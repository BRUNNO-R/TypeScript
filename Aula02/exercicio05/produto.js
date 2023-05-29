"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
var Produto = /** @class */ (function () {
    function Produto(nome, categoria, preco, status) {
        this.codigo = this.gerarCodigo();
        this.nome = nome;
        this.categoria = categoria;
        this.preco = preco;
        this.status = status;
    }
    Produto.prototype.gerarCodigo = function () {
        var codigoLength = 6;
        var caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        var codigo = "";
        for (var i = 0; i < codigoLength; i++) {
            var randomIndex = Math.floor(Math.random() * caracteres.length);
            codigo += caracteres[randomIndex];
        }
        return codigo;
    };
    Produto.prototype.getCodigo = function () {
        return this.codigo;
    };
    Produto.prototype.getNome = function () {
        return this.nome;
    };
    Produto.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Produto.prototype.getCategoria = function () {
        return this.categoria;
    };
    Produto.prototype.setCategoria = function (categoria) {
        this.categoria = categoria;
    };
    Produto.prototype.getPreco = function () {
        return this.preco;
    };
    Produto.prototype.setPreco = function (preco) {
        this.preco = preco;
    };
    Produto.prototype.getStatus = function () {
        return this.status;
    };
    Produto.prototype.setStatus = function (status) {
        this.status = status;
    };
    return Produto;
}());
exports.Produto = Produto;
