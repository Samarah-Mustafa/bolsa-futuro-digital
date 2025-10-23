//Faça uma classe contaInvestimento que seja semelhante a classe ContaBancaria, com a diferença de que se adicione um atributo taxaJuros.
//Forneça um construtor que configure tanto o saldo inicial com a taxa de juros
//Forneça um método adicioneJuros (sem parâmetro explícito) que adicione juros à conta
//Escreva um programa que construa uma poupança com um saldo inicial de R$1.000,00 e uma taxa de juros de 10%
//Depois aplique o método adicioneJuros() cinco vezes e imprima o saldo resultante
class ContaInvestimento {
    private _saldo: number;
    private _taxaJuros: number;

    constructor(saldoInicial: number, taxaJuros: number) {
        this._saldo = saldoInicial;
        this._taxaJuros = taxaJuros;
    }

    adicioneJuros(): void {
        const juros = this._saldo * this._taxaJuros;
        this._saldo += juros;
    }

    getSaldo(): number {
        return this._saldo;
    }

    getTaxaJuros(): number {
        return this._taxaJuros;
    }
}

const poupanca = new ContaInvestimento(1000.00, 0.10);

console.log("Simulação de Investimento - Juros Compostos (10% ao período)");
console.log("-----------------------------------------------------------------");
console.log(`Saldo Inicial: R$${poupanca.getSaldo().toFixed(2)}`);

const numPeriodos = 5;
for (let i = 1; i <= numPeriodos; i++) {
    poupanca.adicioneJuros();
    console.log(`Após o Período ${i}: R$${poupanca.getSaldo().toFixed(2)}`);
}

console.log("-----------------------------------------------------------------");
console.log(`Saldo Final após ${numPeriodos} períodos: R$${poupanca.getSaldo().toFixed(2)}`);