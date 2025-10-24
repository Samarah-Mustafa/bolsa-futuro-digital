//Crie uma classe que modele uma conta corrente:
//Atributos: número da conta, nome do correntista e saldo.
//Métodos: alterar nome, depósito e saque.
class ContaCorrente {
    private readonly _numeroConta: string;
    private _nomeCorrentista: string;
    private _saldo: number;

    constructor(numeroConta: string, nomeCorrentista: string, saldo: number = 0) {
        this._numeroConta = numeroConta;
        this._nomeCorrentista = nomeCorrentista;
        this._saldo = saldo;
    }

    public get numeroConta(): string {
        return this._numeroConta;
    }

    public get nomeCorrentista(): string {
        return this._nomeCorrentista;
    }

    public get saldo(): number {
        return this._saldo;
    }

    public alterarNome(novoNome: string): void {
        this._nomeCorrentista = novoNome;
        console.log(`Nome alterado com sucesso para: ${this._nomeCorrentista}`);
    }

    public deposito(valor: number): boolean {
        if (valor > 0) {
            this._saldo += valor;
            console.log(`Depósito de R$ ${valor.toFixed(2)} realizado. Novo saldo: R$ ${this._saldo.toFixed(2)}`);
            return true;
        }
        console.log("Erro: O valor do depósito deve ser positivo.");
        return false;
    }

    public saque(valor: number): boolean {
        if (valor > 0 && this._saldo >= valor) {
            this._saldo -= valor;
            console.log(`Saque de R$ ${valor.toFixed(2)} realizado. Novo saldo: R$ ${this._saldo.toFixed(2)}`);
            return true;
        }
        
        if (valor <= 0) {
            console.log("Erro: O valor do saque deve ser positivo.");
        } else {
            console.log(`Erro: Saldo insuficiente. Saldo atual: R$ ${this._saldo.toFixed(2)}`);
        }
        return false;
    }

    public exibirInformacoes(): void {
        console.log("\n--- Informações da Conta ---");
        console.log(`Número da Conta: ${this.numeroConta}`);
        console.log(`Correntista: ${this.nomeCorrentista}`);
        console.log(`Saldo Atual: R$ ${this.saldo.toFixed(2)}`);
        console.log("----------------------------");
    }
}

const minhaConta = new ContaCorrente("12345-6", "Alice Souza", 1000.00);
minhaConta.exibirInformacoes();

minhaConta.alterarNome("Alice Oliveira Souza");
minhaConta.exibirInformacoes();

minhaConta.deposito(500.50);

minhaConta.saque(200.00);

minhaConta.saque(1500.00); 

minhaConta.exibirInformacoes();
