enum Turno {
  Manhã = "Manhã",
  Tarde = "Tarde",
  Noite = "Noite",
}

enum Area {
  Humanas = "Humanas",
  Biológicas = "Biológicas",
  Exatas = "Exatas",
}

class Turma {
  private static MIN_DESCRICAO_LENGTH = 10;

  constructor(
    private readonly identificador: string,
    @ValidarTamanho(Turma.MIN_DESCRICAO_LENGTH) private descricao: string,
    private turno: Turno,
    private curso: { descricao: string; area: Area }
  ) {}

  public getIdentificador(): string {
    return this.identificador;
  }

  public getDescricao(): string {
    return this.descricao;
  }

  public setDescricao(descricao: string): void {
    this.descricao = descricao;
  }

  public getTurno(): Turno {
    return this.turno;
  }

  public setTurno(turno: Turno): void {
    this.turno = turno;
  }

  public getCurso(): { descricao: string; area: Area } {
    return this.curso;
  }

  public setCurso(curso: { descricao: string; area: Area }): void {
    this.curso = curso;
  }
}

function ValidarTamanho(minLength: number) {
  return function (target: any, key: string): void {
    let value: string = target[key];

    const getter = function (): string {
      return value;
    };

    const setter = function (newVal: string): void {
      if (newVal.length < minLength) {
        throw new Error(
          `A propriedade "${key}" deve ter no mínimo ${minLength} caracteres.`
        );
      }
      value = newVal;
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}

export { Turma, Turno, Area };
