export type Status = "EM_ESTOQUE" | "ESGOTADO";

export class Produto {
  private codigo: string;
  private nome: string;
  private categoria: string;
  private preco: number;
  private status: Status;

  constructor(nome: string, categoria: string, preco: number, status: Status) {
    this.codigo = this.gerarCodigo();
    this.nome = nome;
    this.categoria = categoria;
    this.preco = preco;
    this.status = status;
  }

  private gerarCodigo(): string {
    const codigoLength = 6;
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let codigo = "";
    for (let i = 0; i < codigoLength; i++) {
      const randomIndex = Math.floor(Math.random() * caracteres.length);
      codigo += caracteres[randomIndex];
    }
    return codigo;
  }

  public getCodigo(): string {
    return this.codigo;
  }

  public getNome(): string {
    return this.nome;
  }

  public setNome(nome: string): void {
    this.nome = nome;
  }

  public getCategoria(): string {
    return this.categoria;
  }

  public setCategoria(categoria: string): void {
    this.categoria = categoria;
  }

  public getPreco(): number {
    return this.preco;
  }

  public setPreco(preco: number): void {
    this.preco = preco;
  }

  public getStatus(): Status {
    return this.status;
  }

  public setStatus(status: Status): void {
    this.status = status;
  }
}
