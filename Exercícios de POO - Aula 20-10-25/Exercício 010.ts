//Faça um programa para controle de empréstimo de livros, com as classes Emprestimo, Livro e Pessoa.
class Livro {
    private _titulo: string;
    private _autor: string;
    private _estaEmprestado: boolean;

    constructor(titulo: string, autor: string) {
        this._titulo = titulo;
        this._autor = autor;
        this._estaEmprestado = false;
    }

    getTitulo(): string {
        return this._titulo;
    }

    getAutor(): string {
        return this._autor;
    }

    getEstaEmprestado(): boolean {
        return this._estaEmprestado;
    }

    setEstaEmprestado(status: boolean): void {
        this._estaEmprestado = status;
    }

    mostrarDetalhes(): void {
        console.log(`Livro: ${this._titulo} (${this._autor})`);
        console.log(`Status: ${this._estaEmprestado ? 'Emprestado' : 'Disponível'}`);
    }
}

class Pessoa {
    private _nome: string;

    constructor(nome: string) {
        this._nome = nome;
    }

    getNome(): string {
        return this._nome;
    }
}

class Emprestimo {
    private _livro: Livro;
    private _pessoa: Pessoa;
    private _dataEmprestimo: Date;
    private _dataDevolucao: Date | null;

    constructor(livro: Livro, pessoa: Pessoa) {
        if (livro.getEstaEmprestado()) {
            throw new Error(`O livro "${livro.getTitulo()}" já está emprestado.`);
        }
        
        this._livro = livro;
        this._pessoa = pessoa;
        this._dataEmprestimo = new Date();
        this._dataDevolucao = null;
        this._livro.setEstaEmprestado(true);
        
        console.log(`\nEMPRÉSTIMO REGISTRADO:`);
        console.log(`  "${livro.getTitulo()}" emprestado para ${pessoa.getNome()}.`);
    }

    devolver(): void {
        if (this._dataDevolucao) {
            console.log(`ERRO: O empréstimo de "${this._livro.getTitulo()}" já foi devolvido.`);
            return;
        }
        this._dataDevolucao = new Date();
        this._livro.setEstaEmprestado(false);
        console.log(`\nDEVOLUÇÃO REGISTRADA:`);
        console.log(`  O livro "${this._livro.getTitulo()}" foi devolvido por ${this._pessoa.getNome()}.`);
    }

    mostrarStatus(): void {
        console.log(`\n--- Status do Empréstimo ---`);
        console.log(`Livro: ${this._livro.getTitulo()}`);
        console.log(`Emprestado para: ${this._pessoa.getNome()}`);
        console.log(`Data Empréstimo: ${this._dataEmprestimo.toLocaleDateString()}`);
        if (this._dataDevolucao) {
            console.log(`Data Devolução: ${this._dataDevolucao.toLocaleDateString()}`);
        } else {
            console.log('Status: Não Devolvido');
        }
        console.log('----------------------------');
    }
}

const livro1 = new Livro("A Arte da Guerra", "Sun Tzu");
const livro2 = new Livro("Dom Casmurro", "Machado de Assis");

const pessoa1 = new Pessoa("Carlos Eduardo");
const pessoa2 = new Pessoa("Mariana Lins");

livro1.mostrarDetalhes();

const emprestimo1 = new Emprestimo(livro1, pessoa1);

livro1.mostrarDetalhes();

try {
    const emprestimoFalho = new Emprestimo(livro1, pessoa2);
} catch (e: any) {
    console.log(`\nERRO DE EMPRÉSTIMO: ${e.message}`);
}

const emprestimo2 = new Emprestimo(livro2, pessoa2);

emprestimo1.mostrarStatus();
emprestimo2.mostrarStatus();

emprestimo1.devolver();

emprestimo1.mostrarStatus();
livro1.mostrarDetalhes();