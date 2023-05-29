export class Cliente {
    constructor(nome, endereco) {
        this.nome = nome;
        this.endereco = endereco;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getEndereco() {
        return this.endereco;
    }
    setEndereco(endereco) {
        this.endereco = endereco;
    }
}
