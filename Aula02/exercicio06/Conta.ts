import { Cliente } from "./Cliente";

export class Conta {
  private numero: string;
  private saldo: number;
  private cliente: Cliente;

  constructor(numero: string, saldo: number, cliente: Cliente) {
    this.numero = numero;
    this.saldo = saldo;
    this.cliente = cliente;
  }

  public getNumero(): string {
    return this.numero;
  }

  public setNumero(numero: string): void {
    this.numero = numero;
  }

  public getSaldo(): number {
    return this.saldo;
  }

  public setSaldo(saldo: number): void {
    this.saldo = saldo;
  }

  public getCliente(): Cliente {
    return this.cliente;
  }

  public setCliente(cliente: Cliente): void {
    this.cliente = cliente;
  }

  public sacar(valor: number): boolean {
    if (valor > 0 && valor <= this.getSaldo()) {
      this.setSaldo(this.getSaldo() - valor);
      console.log(`Saque realizado: R$ ${valor}`);
      return true;
    } else {
      console.log("Saldo insuficiente");
      return false;
    }
  }

  public depositar(valor: number): boolean {
    if (valor > 0) {
      this.setSaldo(this.getSaldo() + valor);
      console.log(`Depósito realizado: R$ ${valor}`);
      return true;
    } else {
      console.log("Valor inválido");
      return false;
    }
  }
}
