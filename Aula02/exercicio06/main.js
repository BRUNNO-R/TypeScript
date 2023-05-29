import { PessoaFisica } from "./PessoaFisica";
import { PessoaJuridica } from "./PessoaJuridica";
import { Agencia } from "./Agencia";
import { Conta } from "./Conta";
const agencia1 = new Agencia("123");
const agencia2 = new Agencia("456");
const agencia3 = new Agencia("789");
console.log("##########  ADICIONAR CONTAS  ################");
const joana = new PessoaFisica("Joana Silva", "Rua 15, Bairro Centro", "123.456.789-00", 35, "Advogada");
const contaJoana = new Conta("1029-x", 0, joana);
agencia1.adicionarConta(contaJoana);
const matheus = new PessoaJuridica("Matheus Fraga", "Avenida Dez, Bairro Centro", "12.345.678/0001-09", "Consultoria", "Empresa XYZ");
const contaMatheus = new Conta("90201-x", 0, matheus);
agencia1.adicionarConta(contaMatheus);
const maria = new PessoaFisica("Maria Souza", "Rua 20, Bairro Centro", "987.654.321-00", 45, "Engenheira");
const contaMaria = new Conta("2020-x", 0, maria);
agencia1.adicionarConta(contaMaria);
const lucas = new PessoaJuridica("Lucas Lima", "Avenida Principal, Bairro Norte", "11.223.334/0001-11", "Comércio", "Empresa ABC");
const contaLucas = new Conta("3030-x", 0, lucas);
agencia1.adicionarConta(contaLucas);
const ana = new PessoaFisica("Ana Santos", "Rua 25, Bairro Sul", "555.666.777-00", 30, "Professora");
const contaAna = new Conta("4040-x", 0, ana);
agencia2.adicionarConta(contaAna);
const carlos = new PessoaJuridica("Carlos Mendes", "Avenida Central, Bairro Leste", "99.888.777/0001-22", "Tecnologia", "Empresa XYZ");
const contaCarlos = new Conta("5050-x", 0, carlos);
agencia2.adicionarConta(contaCarlos);
const pedro = new PessoaFisica("Pedro Oliveira", "Rua 30, Bairro Oeste", "222.333.444-00", 28, "Estudante");
const contaPedro = new Conta("6060-x", 0, pedro);
agencia2.adicionarConta(contaPedro);
const fernanda = new PessoaJuridica("Fernanda Costa", "Avenida Secundária, Bairro Sul", "44.555.666/0001-33", "Saúde", "Empresa ABC");
const contaFernanda = new Conta("7070-x", 0, fernanda);
agencia2.adicionarConta(contaFernanda);
const jose = new PessoaFisica("José Oliveira", "Rua 35, Bairro Norte", "777.888.999-00", 50, "Aposentado");
const contaJose = new Conta("8080-x", 0, jose);
agencia3.adicionarConta(contaJose);
const mariana = new PessoaJuridica("Mariana Silva", "Avenida Principal, Bairro Centro", "12.345.678/0001-44", "Alimentação", "Empresa XYZ");
const contaMariana = new Conta("9090-x", 0, mariana);
agencia3.adicionarConta(contaMariana);
const gabriel = new PessoaFisica("Gabriel Santos", "Rua 40, Bairro Sul", "111.222.333-00", 32, "Engenheiro");
const contaGabriel = new Conta("1010-x", 0, gabriel);
agencia3.adicionarConta(contaGabriel);
const anaPaula = new PessoaJuridica("Ana Paula Lima", "Avenida Principal, Bairro Oeste", "99.888.777/0001-55", "Moda", "Empresa ABC");
const contaAnaPaula = new Conta("1111-x", 0, anaPaula);
agencia3.adicionarConta(contaAnaPaula);
console.log("\n\n\n");
console.log("##########################");
console.log("##########################");
agencia1.mostrarClientes();
console.log("##########################");
console.log("##########################");
agencia2.mostrarClientes();
console.log("##########################");
console.log("##########################");
agencia3.mostrarClientes();
console.log("##########################");
console.log("##########################");
console.log("##########################");
console.log("\n\n\n");
// Realizando operações de saque e depósito
contaJoana.sacar(100);
contaMatheus.depositar(500);
contaMatheus.sacar(50);
contaLucas.depositar(200);
contaAna.sacar(150);
contaCarlos.depositar(300);
contaPedro.sacar(80);
contaFernanda.depositar(100);
contaJose.sacar(200);
contaMariana.depositar(400);
contaGabriel.sacar(120);
contaAnaPaula.depositar(250);
console.log("\n\n\n");
console.log("###############################################");
console.log("####  DADOS DO CLIENTE - AGENCIA 123  #########");
console.log("###############################################");
console.log("\n\n\n");
const agencia123 = agencia1; // Altere para a agência desejada
// Obtendo as contas da agência
const contasAgencia123 = agencia123.getContas();
// Percorrendo as contas da agência
for (const conta of contasAgencia123) {
    const cliente = conta.getCliente();
    console.log("##########################");
    console.log("Nome: " + cliente.getNome());
    console.log("Endereço: " + cliente.getEndereco());
    if (cliente instanceof PessoaFisica) {
        console.log("CPF: " + cliente.getCpf());
    }
    else if (cliente instanceof PessoaJuridica) {
        console.log("CNPJ: " + cliente.getCnpj());
    }
    console.log("##########################");
}
console.log("##########################");
