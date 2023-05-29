import { Cliente } from "./Cliente";
export class PessoaJuridica extends Cliente {
    constructor(nome, endereco, cnpj, atividade, razaoSocial) {
        super(nome, endereco);
        this.cnpj = cnpj;
        this.atividade = atividade;
        this.razaoSocial = razaoSocial;
    }
    getCnpj() {
        return this.cnpj;
    }
    setCnpj(cnpj) {
        this.cnpj = cnpj;
    }
    getAtividade() {
        return this.atividade;
    }
    setAtividade(atividade) {
        this.atividade = atividade;
    }
    getRazaoSocial() {
        return this.razaoSocial;
    }
    setRazaoSocial(razaoSocial) {
        this.razaoSocial = razaoSocial;
    }
}
