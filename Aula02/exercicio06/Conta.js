export class Conta {
    constructor(numero, saldo, cliente) {
        this.numero = numero;
        this.saldo = saldo;
        this.cliente = cliente;
    }
    getNumero() {
        return this.numero;
    }
    setNumero(numero) {
        this.numero = numero;
    }
    getSaldo() {
        return this.saldo;
    }
    setSaldo(saldo) {
        this.saldo = saldo;
    }
    getCliente() {
        return this.cliente;
    }
    setCliente(cliente) {
        this.cliente = cliente;
    }
    sacar(valor) {
        if (valor > 0 && valor <= this.getSaldo()) {
            this.setSaldo(this.getSaldo() - valor);
            console.log(`Saque realizado: R$ ${valor}`);
            return true;
        }
        else {
            console.log("Saldo insuficiente");
            return false;
        }
    }
    depositar(valor) {
        if (valor > 0) {
            this.setSaldo(this.getSaldo() + valor);
            console.log(`Depósito realizado: R$ ${valor}`);
            return true;
        }
        else {
            console.log("Valor inválido");
            return false;
        }
    }
}
