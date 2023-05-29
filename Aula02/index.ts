import GerenciadorTurmas from "./GerenciadorTurmas";
import { Turma, Turno, Area } from "./Turma";

const gerenciador = new GerenciadorTurmas();

const turma1 = new Turma(
  "1",
  "Turma de Engenharia Civil",
  Turno.Tarde,
  { descricao: "Engenharia Civil", area: Area.Exatas }
);
gerenciador.adicionarTurma(turma1);

const turma2 = new Turma(
  "2",
  "Turma de Medicina",
  Turno.Manhã,
  { descricao: "Medicina", area: Area.Biológicas }
);
gerenciador.adicionarTurma(turma2);

console.log("Turmas cadastradas:");
gerenciador.imprimirTurmas();

turma1.setDescricao("Engenharia Civil Avançada");
console.log(`Nova descrição da Turma 1: ${turma1.getDescricao()}`);

gerenciador.excluirTurma("2");
console.log("Turmas após exclusão:");
gerenciador.imprimirTurmas();
