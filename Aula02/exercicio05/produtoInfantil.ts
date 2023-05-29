import { Produto, Status } from './produto';

export class ProdutoInfantil extends Produto {
  private faixaEtaria: number;

  constructor(nome: string, categoria: string, preco: number, status: Status, faixaEtaria: number) {
    super(nome, categoria, preco, status);
    if (this.verificarFaixaEtariaValida(faixaEtaria)) {
      this.faixaEtaria = faixaEtaria;
    } else {
      throw new Error("Faixa etária inválida para o produto infantil.");
    }
  }

  public getFaixaEtaria(): number {
    return this.faixaEtaria;
  }

  public setFaixaEtaria(faixaEtaria: number): void {
    if (this.verificarFaixaEtariaValida(faixaEtaria)) {
      this.faixaEtaria = faixaEtaria;
    } else {
      throw new Error("Faixa etária inválida para o produto infantil.");
    }
  }

  public adicionar(): void {
    this.mudarStatus("EM_ESTOQUE");
    console.log(`Produto ${this.getNome()}, categoria: ${this.getCategoria()}`);
  }

  private mudarStatus(status: Status): void {
    if (status === "EM_ESTOQUE") {
      this.setStatus("EM_ESTOQUE");
    } else {
      this.setStatus("ESGOTADO");
    }
  }

  private verificarFaixaEtariaValida(faixaEtaria: number): boolean {
    return faixaEtaria <= 12;
  }
}
