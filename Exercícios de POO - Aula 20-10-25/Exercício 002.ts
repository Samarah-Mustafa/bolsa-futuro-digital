//Crie uma classe que modele uma avaliação física de academia:
//Atributos: Id matricula, data da matrícula, aluno e avaliações físicas.
//Informações do aluno, informações da última avaliação e informações de uma avaliação qualquer.
class Aluno {
    constructor(
        public nome: string,
        public dataNascimento: Date,
        public peso: number,
        public altura: number
    ) {}

    public calculaIdade(): number {
        const hoje = new Date();
        let idade = hoje.getFullYear() - this.dataNascimento.getFullYear();
        if (hoje.getMonth() < this.dataNascimento.getMonth() ||
            (hoje.getMonth() === this.dataNascimento.getMonth() && hoje.getDate() < this.dataNascimento.getDate())) {
            idade--;
        }
        return idade;
    }
}

interface MedidasCorporais {
    cintura: number;
    quadril: number;
    bracoDireito: number;
}

class AvaliacaoFisica {
    constructor(
        public data: Date,
        public peso: number,
        public imc: number,
        public medidas: MedidasCorporais
    ) {}

    public static criar(data: Date, peso: number, medidas: MedidasCorporais, aluno: Aluno): AvaliacaoFisica {
        const alturaAoQuadrado = aluno.altura * aluno.altura;
        const imc = alturaAoQuadrado > 0 ? peso / alturaAoQuadrado : 0;
        return new AvaliacaoFisica(data, peso, imc, medidas);
    }

    public exibirDetalhes(): void {
        console.log(`  - Data: ${this.data.toLocaleDateString('pt-BR')}`);
        console.log(`  - Peso: ${this.peso.toFixed(1)} kg`);
        console.log(`  - IMC: ${this.imc.toFixed(2)}`);
        console.log(`  - Cintura: ${this.medidas.cintura} cm`);
    }
}

class HistoricoAvaliacoes {
    private readonly idMatricula: string;
    private readonly dataMatricula: Date;
    private readonly aluno: Aluno;
    private avaliacoesFisicas: AvaliacaoFisica[] = [];

    constructor(idMatricula: string, dataMatricula: Date, aluno: Aluno) {
        this.idMatricula = idMatricula;
        this.dataMatricula = dataMatricula;
        this.aluno = aluno;
    }

    public adicionarAvaliacao(avaliacao: AvaliacaoFisica): void {
        this.avaliacoesFisicas.push(avaliacao);
        this.avaliacoesFisicas.sort((a, b) => a.data.getTime() - b.data.getTime());
    }

    public informacoesDoAluno(): void {
        console.log(`\n--- Dados Cadastrais (Matrícula #${this.idMatricula}) ---`);
        console.log(`Nome: ${this.aluno.nome}`);
        console.log(`Idade: ${this.aluno.calculaIdade()} anos`);
        console.log(`Altura: ${this.aluno.altura} m`);
        console.log(`Data Matrícula: ${this.dataMatricula.toLocaleDateString('pt-BR')}`);
    }

    public informacoesDaUltimaAvaliacao(): void {
        const ultima = this.avaliacoesFisicas[this.avaliacoesFisicas.length - 1];

        if (!ultima) {
            console.log(`\n--- Última Avaliação Física (${this.aluno.nome}) ---`);
            console.log("Nenhuma avaliação física encontrada no histórico.");
            return;
        }

        console.log(`\n--- Última Avaliação Física (${this.aluno.nome}) ---`);
        ultima.exibirDetalhes();
    }

    public informacoesDeUmaAvaliacao(indice: number): void {
        const avaliacao = this.avaliacoesFisicas[indice];

        if (!avaliacao) {
            console.log(`\nErro: Índice de avaliação ${indice + 1} inválido. Total de avaliações: ${this.avaliacoesFisicas.length}`);
            return;
        }
        
        console.log(`\n--- Avaliação Física #${indice + 1} de ${this.avaliacoesFisicas.length} (${this.aluno.nome}) ---`);
        avaliacao.exibirDetalhes();
    }
}

const maria = new Aluno(
    "Maria Costa",
    new Date("1998-03-25"),
    70.0,
    1.65
);

const historicoMaria = new HistoricoAvaliacoes(
    "M12345",
    new Date("2024-01-10"),
    maria
);

const av1 = AvaliacaoFisica.criar(
    new Date("2024-01-10"),
    70.0,
    { cintura: 80, quadril: 100, bracoDireito: 30 },
    maria
);
historicoMaria.adicionarAvaliacao(av1);

const av2 = AvaliacaoFisica.criar(
    new Date("2024-04-15"),
    68.5,
    { cintura: 78, quadril: 98, bracoDireito: 31 },
    maria
);
historicoMaria.adicionarAvaliacao(av2);

historicoMaria.informacoesDoAluno();
historicoMaria.informacoesDaUltimaAvaliacao();
historicoMaria.informacoesDeUmaAvaliacao(0);
historicoMaria.informacoesDeUmaAvaliacao(1);
