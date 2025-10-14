//Crie uma hierarquia de classes com Animal sendo a classe base e Gato e Pássaro como subclasses. 
//Implemente métodos específicos para cada animal.
abstract class Animal {
    public nome: string; 

    public abstract emitirSom(): void;

    constructor(nome: string) {
        this.nome = nome;
    }
    
    public apresentar(): void {
        console.log(`Eu sou o ${this.nome}.`);
    }
}

class Gato extends Animal {
    public emitirSom(): void {
        console.log(`${this.nome} diz: Miau!`);
    }
    
    constructor(nome: string) {
        super(nome);
    }
}

class Passaro extends Animal {
    public emitirSom(): void {
        console.log(`${this.nome} diz: Bem-te-vi!`);
    }
    
    constructor(nome: string) {
        super(nome);
    }
}

const salem = new Gato("Salem");
const bemTeVi = new Passaro("Bem-te-vi");

salem.apresentar();
salem.emitirSom();

bemTeVi.apresentar();
bemTeVi.emitirSom();