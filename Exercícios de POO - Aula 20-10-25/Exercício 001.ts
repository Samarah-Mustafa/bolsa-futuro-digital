//Crie uma classe que modele um aluno de academia:
// Atributos: Nome, data de nascimento, peso e altura.
// Métodos: Calcula idade.
class AlunoAcademia {
    constructor(
        public nome: string,
        public dataNascimento: Date,
        public peso: number,
        public altura: number
    ) {}

    calculaIdade(): number {
        const hoje = new Date();
        let idade = hoje.getFullYear() - this.dataNascimento.getFullYear();
        
        const mesAniversario = this.dataNascimento.getMonth();
        const diaAniversario = this.dataNascimento.getDate();

        if (hoje.getMonth() < mesAniversario || 
            (hoje.getMonth() === mesAniversario && hoje.getDate() < diaAniversario)) {
            idade--;
        }

        return idade;
    }
}

const aluno = new AlunoAcademia("João", new Date("2000-11-20"), 80.5, 1.85);

console.log(`Nome: ${aluno.nome}`);
console.log(`Idade: ${aluno.calculaIdade()} anos`);
console.log(`Peso: ${aluno.peso} kg`);
console.log(`Altura: ${aluno.altura} m`);
console.log(`Data de Nascimento: ${aluno.dataNascimento.toLocaleDateString('pt-BR')}`);