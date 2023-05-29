import { Produto } from './produto';
import { ProdutoInfantil } from './produtoInfantil';




const novoProdutoInfantil1 = new ProdutoInfantil("Shampoo Infantil", "Cuidados Pessoais", 20, "ESGOTADO", 8);
novoProdutoInfantil1.adicionar();


const novoProduto = new Produto("Sabonete", "Cuidados Pessoais", 2, "ESGOTADO");
console.log("Código:", novoProduto.getCodigo());
console.log("Nome:", novoProduto.getNome());
console.log("Categoria:", novoProduto.getCategoria());
console.log("Preço", novoProduto.getPreco());
console.log("Status:", novoProduto.getStatus());

const novoProdutoInfantil = new ProdutoInfantil("Lençol", "Cuidados Pessoais", 2, "EM_ESTOQUE", 20);
const novoProdutoInfantil2 = new ProdutoInfantil("cama", "Cuidados Pessoais", 200, "EM_ESTOQUE", 15);
const novoProdutoInfantil3 = new ProdutoInfantil("Frauda", "Cuidados Pessoais", 5, "EM_ESTOQUE", 2);
console.log("Código:", novoProdutoInfantil.getCodigo());
console.log("Nome:", novoProdutoInfantil.getNome());

