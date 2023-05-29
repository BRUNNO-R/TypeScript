import { Conta } from "./Conta";
import { Cliente } from "./Cliente";

export class Agencia {
  private contas: Conta[];
  private numero: string;

  constructor(numero: string) {
    this.contas = [];
    this.numero = numero;
  }

  public getNumero(): string {
    return this.numero;
  }

  public adicionarConta(conta: Conta): void {
    this.contas.push(conta);
    console.log(`Conta adicionada: ${conta.getNumero()}`);
  }

  public getContas(): Conta[] {
    return this.contas;
  }

  public mostrarClientes(): void {
    console.log(`Clientes da agência ${this.numero}:`);
    this.contas.forEach((conta) => {
      const cliente = conta.getCliente();
      console.log(`${cliente.getNome()}`);
    });
  }
}
