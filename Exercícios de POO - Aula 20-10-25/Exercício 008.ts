//Crie uma classe que modele um funcionário.
//Um empregado tem um nome (String) e um salário (Double)
//Escreva um construtor com dois parâmetros (nome e salário)
//Métodos para devolver nome, salário, aumentar salário (porcentualDeAumento) que aumente o salário do funcionário em uma certa porcentagem.
//Escreva um pequeno programa que teste sua classe.
class Funcionario {
    private _nome: string;
    private _salario: number;

    constructor(nome: string, salario: number) {
        this._nome = nome;
        this._salario = salario;
    }

    public get nome(): string {
        return this._nome;
    }

    public get salario(): number {
        return this._salario;
    }

    public aumentarSalario(porcentualDeAumento: number): void {
        const fatorAumento = 1 + (porcentualDeAumento / 100);
        this._salario *= fatorAumento;
    }
}

const empregado1 = new Funcionario("Alice Silva", 50000.00);

console.log(`Nome: ${empregado1.nome}`);
console.log(`Salário Inicial: R$${empregado1.salario.toFixed(2)}`);

const aumentoPercentual = 15;
empregado1.aumentarSalario(aumentoPercentual);

console.log(`Aumento de ${aumentoPercentual}% aplicado.`);
console.log(`Novo Salário: R$${empregado1.salario.toFixed(2)}`);

const empregado2 = new Funcionario("Bruno Costa", 32000.50);

console.log(`\nNome: ${empregado2.nome}`);
console.log(`Salário Inicial: R$${empregado2.salario.toFixed(2)}`);

const aumentoPercentual2 = 8.5;
empregado2.aumentarSalario(aumentoPercentual2);

console.log(`Aumento de ${aumentoPercentual2}% aplicado.`);
console.log(`Novo Salário: R$${empregado2.salario.toFixed(2)}`);
