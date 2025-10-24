//Crie uma classe que modele uma bomba de combustível:
//Atributos: tipo de combustível, valor do litro, quantidade do combustível.
//Métodos:
//1 - Abastecer por valor: método onde é informado o valor a ser abastecido e mostra a quantidade de litros que foi colocada no veículo.
//2 - Abastecer por litro: método onde é informado a quantidade em litros de combustível e mostra o valor a ser pago pelo cliente.
//3 - Alterar o valor do litro do combustível: altera o valor do litro do combustível.
//4 - Alterar quantidade de combustível: altera a quantidade de combustível restante na bomba.
//Sempre que acontecer um abastecimento é necessário atualizar a quantidade de combustível total na bomba. A bomba inicia com 100 L de combustível.
class BombaCombustivel {
    private _tipoCombustivel: string;
    private _valorLitro: number;
    private _quantidadeCombustivel: number;

    constructor(
        tipoCombustivel: string,
        valorLitro: number,
        quantidadeCombustivel: number = 100
    ) {
        this._tipoCombustivel = tipoCombustivel;
        this._valorLitro = valorLitro;
        this._quantidadeCombustivel = quantidadeCombustivel;
    }

    public get tipoCombustivel(): string {
        return this._tipoCombustivel;
    }

    public get valorLitro(): number {
        return this._valorLitro;
    }

    public get quantidadeCombustivel(): number {
        return this._quantidadeCombustivel;
    }

    public abastecerPorValor(valor: number): number {
        const litros = valor / this._valorLitro;
        if (litros > this._quantidadeCombustivel) {
            console.log("Quantidade insuficiente de combustível.");
            return 0;
        }
        this._quantidadeCombustivel -= litros;
        return litros;
    }

    public abastecerPorLitro(litros: number): number {
        if (litros > this._quantidadeCombustivel) {
            console.log("Quantidade insuficiente de combustível.");
            return 0;
        }
        const valor = litros * this._valorLitro;
        this._quantidadeCombustivel -= litros;
        return valor;
    }

    public alterarValorLitro(novoValor: number): void {
        if (novoValor > 0) {
            this._valorLitro = novoValor;
        } else {
            console.log("O valor do litro deve ser positivo.");
        }
    }

    public alterarQuantidadeCombustivel(novaQuantidade: number): void {
        if (novaQuantidade >= 0) {
            this._quantidadeCombustivel = novaQuantidade;
        } else {
            console.log("A quantidade de combustível não pode ser negativa.");
        }
    }
}

const minhaBomba = new BombaCombustivel("Gasolina", 5.0, 100);

console.log(`Tipo de Combustível: ${minhaBomba.tipoCombustivel}`);
console.log(`Valor por Litro: R$ ${minhaBomba.valorLitro.toFixed(2)}`);

const litrosAbastecidos = minhaBomba.abastecerPorValor(50);
console.log(`Litros abastecidos por R$ 50: ${litrosAbastecidos.toFixed(2)} L`);    
console.log(`Quantidade restante na bomba: ${minhaBomba.quantidadeCombustivel.toFixed(2)} L`);

const valorPago = minhaBomba.abastecerPorLitro(10);
console.log(`Valor pago por 10 litros: R$ ${valorPago.toFixed(2)}`);    
console.log(`Quantidade restante na bomba: ${minhaBomba.quantidadeCombustivel.toFixed(2)} L`);

minhaBomba.alterarValorLitro(6.0);
console.log(`Novo valor por litro: R$ ${minhaBomba.valorLitro.toFixed(2)}`);

minhaBomba.alterarQuantidadeCombustivel(80);
console.log(`Nova quantidade de combustível: ${minhaBomba.quantidadeCombustivel.toFixed(2)} L`);

const litrosTentativaFalha = minhaBomba.abastecerPorLitro(100);
console.log(`Litros na tentativa falha: ${litrosTentativaFalha.toFixed(2)} L`);
