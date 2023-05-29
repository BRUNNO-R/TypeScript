import { Cliente } from "./Cliente";

export class PessoaJuridica extends Cliente {
  private cnpj: string;
  private atividade: string;
  private razaoSocial: string;

  constructor(nome: string, endereco: string, cnpj: string, atividade: string, razaoSocial: string) {
    super(nome, endereco);
    this.cnpj = cnpj;
    this.atividade = atividade;
    this.razaoSocial = razaoSocial;
  }

  public getCnpj(): string {
    return this.cnpj;
  }

  public setCnpj(cnpj: string): void {
    this.cnpj = cnpj;
  }

  public getAtividade(): string {
    return this.atividade;
  }

  public setAtividade(atividade: string): void {
    this.atividade = atividade;
  }

  public getRazaoSocial(): string {
    return this.razaoSocial;
  }

  public setRazaoSocial(razaoSocial: string): void {
    this.razaoSocial = razaoSocial;
  }
}
