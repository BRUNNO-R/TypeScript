import { PessoaFisica } from "./PessoaFisica";
import { PessoaJuridica } from "./PessoaJuridica";
import { Agencia } from "./Agencia";
import { Conta } from "./Conta";

const agencia = new Agencia("bradesco");



const luiza = new PessoaFisica("Luiza pereira carvalho", "Rua 20", "020.098.092-00", 15 , "Estudante");
const contaLuiza: Conta = new Conta("1154", 50, luiza);
agencia.adicionarConta(contaLuiza);

const lucas = new PessoaJuridica("Lucas Souza", "Rua 30", "234.876.453-78", "Consultoria", "Campos");
const contaLucas: Conta = new Conta("3030", 0, lucas);
agencia.adicionarConta(contaLucas);




agencia.mostrarClientes();

contaLuiza.sacar(100);
contaLucas.depositar(500);
contaLucas.sacar(50);




