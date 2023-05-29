import { Cliente } from "./Cliente";
export class PessoaFisica extends Cliente {
    constructor(nome, endereco, cpf, idade, profissao) {
        super(nome, endereco);
        this.cpf = cpf;
        this.idade = idade;
        this.profissao = profissao;
    }
    getCpf() {
        return this.cpf;
    }
    setCpf(cpf) {
        this.cpf = cpf;
    }
    getIdade() {
        return this.idade;
    }
    setIdade(idade) {
        this.idade = idade;
    }
    getProfissao() {
        return this.profissao;
    }
    setProfissao(profissao) {
        this.profissao = profissao;
    }
}
