import { Cliente } from "./Cliente";

export class PessoaFisica extends Cliente {
  private cpf: string;
  private idade: number;
  private profissao: string;

  constructor(nome: string, endereco: string, cpf: string, idade: number, profissao: string) {
    super(nome, endereco);
    this.cpf = cpf;
    this.idade = idade;
    this.profissao = profissao;
  }

  public getCpf(): string {
    return this.cpf;
  }

  public setCpf(cpf: string): void {
    this.cpf = cpf;
  }

  public getIdade(): number {
    return this.idade;
  }

  public setIdade(idade: number): void {
    this.idade = idade;
  }

  public getProfissao(): string {
    return this.profissao;
  }

  public setProfissao(profissao: string): void {
    this.profissao = profissao;
  }
}
