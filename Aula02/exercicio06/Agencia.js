export class Agencia {
    constructor(numero) {
        this.contas = [];
        this.numero = numero;
    }
    getNumero() {
        return this.numero;
    }
    adicionarConta(conta) {
        this.contas.push(conta);
        console.log(`Conta adicionada: ${conta.getNumero()}`);
    }
    getContas() {
        return this.contas;
    }
    mostrarClientes() {
        console.log(`Clientes da agência ${this.numero}:`);
        this.contas.forEach((conta) => {
            const cliente = conta.getCliente();
            console.log(`${cliente.getNome()}`);
        });
    }
}
