"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var produto_1 = require("./produto");
var produtoInfantil_1 = require("./produtoInfantil");
console.log("\n ##############");
// Exemplo de uso
var novoProdutoInfantil1 = new produtoInfantil_1.ProdutoInfantil("Shampoo Infantil", "Cuidados Pessoais", 20, "ESGOTADO", 8);
novoProdutoInfantil1.adicionar();
console.log("\n ##############");
// Exemplo de uso
var novoProduto = new produto_1.Produto("Shampoo", "Cuidados Pessoais", 30, "ESGOTADO");
console.log("Código do Produto:", novoProduto.getCodigo());
console.log("Nome do Produto:", novoProduto.getNome());
console.log("Categoria do Produto:", novoProduto.getCategoria());
console.log("Preço do Produto:", novoProduto.getPreco());
console.log("Status do Produto:", novoProduto.getStatus());
console.log("\n ##############");
var novoProdutoInfantil = new produtoInfantil_1.ProdutoInfantil("Shampoo Infantil", "Cuidados Pessoais", 20, "EM_ESTOQUE", 8);
console.log("Código do Produto Infantil:", novoProdutoInfantil.getCodigo());
console.log("Nome do Produto Infantil:", novoProdutoInfantil.getNome());
console.log("\n ##############");
var novoProdutoInfantil2 = new produtoInfantil_1.ProdutoInfantil("Shampoo Infantil", "Cuidados Pessoais", 20, "EM_ESTOQUE", 20);
