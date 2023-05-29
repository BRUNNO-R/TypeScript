"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoInfantil = void 0;
var produto_1 = require("./produto");
var ProdutoInfantil = /** @class */ (function (_super) {
    __extends(ProdutoInfantil, _super);
    function ProdutoInfantil(nome, categoria, preco, status, faixaEtaria) {
        var _this = _super.call(this, nome, categoria, preco, status) || this;
        if (_this.verificarFaixaEtariaValida(faixaEtaria)) {
            _this.faixaEtaria = faixaEtaria;
        }
        else {
            throw new Error("Faixa etária inválida para o produto infantil.");
        }
        return _this;
    }
    ProdutoInfantil.prototype.getFaixaEtaria = function () {
        return this.faixaEtaria;
    };
    ProdutoInfantil.prototype.setFaixaEtaria = function (faixaEtaria) {
        if (this.verificarFaixaEtariaValida(faixaEtaria)) {
            this.faixaEtaria = faixaEtaria;
        }
        else {
            throw new Error("Faixa etária inválida para o produto infantil.");
        }
    };
    ProdutoInfantil.prototype.adicionar = function () {
        this.mudarStatus("EM_ESTOQUE");
        console.log("Produto ".concat(this.getNome(), ", categoria: ").concat(this.getCategoria()));
    };
    ProdutoInfantil.prototype.mudarStatus = function (status) {
        if (status === "EM_ESTOQUE") {
            this.setStatus("EM_ESTOQUE");
        }
        else {
            this.setStatus("ESGOTADO");
        }
    };
    ProdutoInfantil.prototype.verificarFaixaEtariaValida = function (faixaEtaria) {
        return faixaEtaria <= 12;
    };
    return ProdutoInfantil;
}(produto_1.Produto));
exports.ProdutoInfantil = ProdutoInfantil;
