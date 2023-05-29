export class ContaBanco {
    constructor(numero, saldo, cliente) {
        this.agencias = [];
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
    adicionarAgencia(agencia) {
        this.agencias.push(agencia);
    }
    getAgencias() {
        return this.agencias;
    }
}
