export class Cliente {
    private nome: string;
    private endereco: string;
  
    constructor(nome: string, endereco: string) {
      this.nome = nome;
      this.endereco = endereco;
    }
  
    public getNome(): string {
      return this.nome;
    }
  
    public setNome(nome: string): void {
      this.nome = nome;
    }
  
    public getEndereco(): string {
      return this.endereco;
    }
  
    public setEndereco(endereco: string): void {
      this.endereco = endereco;
    }
  }
  