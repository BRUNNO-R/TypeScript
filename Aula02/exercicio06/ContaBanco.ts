import { Cliente } from "./Cliente";
import { Agencia } from "./Agencia";


export abstract class ContaBanco {
  private agencias: Agencia[];
  private numero: string;
  private saldo: number;
  private cliente: Cliente;

  constructor(numero: string, saldo: number, cliente: Cliente) {
    this.agencias = [];
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


  public adicionarAgencia(agencia: Agencia): void {
    this.agencias.push(agencia);
  }

  public getAgencias(): Agencia[] {
    return this.agencias;
  }

  public abstract sacar(valor: number): void;
  public abstract depositar(valor: number): void;
}
