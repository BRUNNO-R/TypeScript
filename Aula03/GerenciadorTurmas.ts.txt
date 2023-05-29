import { Turma } from "./Turma";

class GerenciadorTurmas {
  private turmas: Turma[] = [];

  public adicionarTurma(turma: Turma): void {
    this.turmas.push(turma);
  }

  public excluirTurma(identificador: string): void {
    this.turmas = this.turmas.filter((turma) => turma.getIdentificador() !== identificador);
  }

  public alterarTurma(identificador: string, novaDescricao: string): void {
    const turma = this.buscarTurma(identificador);
    if (turma) {
      turma.setDescricao(novaDescricao);
    }
  }

  public buscarTurma(identificador: string): Turma | undefined {
    return this.turmas.find((turma) => turma.getIdentificador() === identificador);
  }

  public imprimirTurmas(): void {
    this.turmas.forEach((turma) => {
      console.log(`Identificador: ${turma.getIdentificador()}`);
      console.log(`Descrição: ${turma.getDescricao()}`);
      console.log(`Turno: ${turma.getTurno()}`);
      console.log(`Curso: ${turma.getCurso().descricao}`);
      console.log(`Área: ${turma.getCurso().area}`);
      console.log("-------------------------");
    });
  }
}

export default GerenciadorTurmas;
