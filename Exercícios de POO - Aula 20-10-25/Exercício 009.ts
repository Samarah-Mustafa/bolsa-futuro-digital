//Identifique as classes e implemente um programa para a seguinte especificação: “O supermercado vende diferentes tipos de produtos. Cada produto tem um preço e uma quantidade em estoque. Um pedido de um cliente é composto de itens, onde cada item especifica o produto que o cliente deseja e a respectiva quantidade. Esse pedido pode ser pago em dinheiro, cheque ou cartão.”

class Produto {
    private _nome: string;
    private _preco: number;
    private _estoque: number;

    constructor(nome: string, preco: number, estoque: number) {
        this._nome = nome;
        this._preco = preco;
        this._estoque = estoque;
    }

    getNome(): string {
        return this._nome;
    }

    getPreco(): number {
        return this._preco;
    }

    getEstoque(): number {
        return this._estoque;
    }

    diminuirEstoque(quantidade: number): void {
        if (quantidade > this._estoque) {
            throw new Error(`Estoque insuficiente para ${this._nome}. Disponível: ${this._estoque}`);
        }
        this._estoque -= quantidade;
    }
}

class ItemPedido {
    private _produto: Produto;
    private _quantidade: number;

    constructor(produto: Produto, quantidade: number) {
        if (quantidade <= 0) {
             throw new Error("A quantidade do item deve ser positiva.");
        }
        this._produto = produto;
        this._quantidade = quantidade;
    }

    getProduto(): Produto {
        return this._produto;
    }

    getQuantidade(): number {
        return this._quantidade;
    }

    getValorTotal(): number {
        return this._produto.getPreco() * this._quantidade;
    }
}

type FormaPagamento = "Dinheiro" | "Cheque" | "Cartão";

class Pedido {
    private _itens: ItemPedido[];
    private _total: number;
    private _formaPagamento: FormaPagamento | null;

    constructor() {
        this._itens = [];
        this._total = 0;
        this._formaPagamento = null;
    }

    adicionarItem(item: ItemPedido): void {
        if (item.getQuantidade() > item.getProduto().getEstoque()) {
             console.log(`ERRO: Não foi possível adicionar ${item.getQuantidade()} de ${item.getProduto().getNome()} por falta de estoque.`);
             return;
        }

        this._itens.push(item);
        this.calcularTotal();
    }

    private calcularTotal(): void {
        this._total = this._itens.reduce((soma, item) => soma + item.getValorTotal(), 0);
    }

    getValorTotal(): number {
        return this._total;
    }

    processarPagamento(forma: FormaPagamento): boolean {
        if (this._total <= 0) {
            console.log("ERRO: Pedido vazio. Não é possível pagar.");
            return false;
        }

        this._formaPagamento = forma;
        console.log(`Pagamento de R$${this._total.toFixed(2)} processado via ${this._formaPagamento}.`);

        this._itens.forEach(item => {
            item.getProduto().diminuirEstoque(item.getQuantidade());
        });
        
        return true;
    }

    mostrarDetalhes(): void {
        console.log("\n--- Detalhes do Pedido ---");
        this._itens.forEach(item => {
            console.log(`- ${item.getQuantidade()}x ${item.getProduto().getNome()} @ R$${item.getProduto().getPreco().toFixed(2)}`);
        });
        console.log(`Total: R$${this._total.toFixed(2)}`);
        console.log(`Forma de Pagamento: ${this._formaPagamento || 'Pendente'}`);
        console.log("--------------------------");
    }
}


const arroz = new Produto("Arroz 5kg", 25.50, 50);
const feijao = new Produto("Feijão 1kg", 8.90, 30);
const leite = new Produto("Leite Longe Vida", 4.00, 100);

const pedidoCliente1 = new Pedido();

const item1 = new ItemPedido(arroz, 2);
const item2 = new ItemPedido(feijao, 4);
const item3 = new ItemPedido(leite, 10);

pedidoCliente1.adicionarItem(item1);
pedidoCliente1.adicionarItem(item2);
pedidoCliente1.adicionarItem(item3);

const itemFalhaEstoque = new ItemPedido(arroz, 60); 
pedidoCliente1.adicionarItem(itemFalhaEstoque); 

pedidoCliente1.mostrarDetalhes();

pedidoCliente1.processarPagamento("Cartão");

console.log(`\nEstoque atual de Arroz: ${arroz.getEstoque()}`);
console.log(`Estoque atual de Leite: ${leite.getEstoque()}`);