//Crie uma classe que modele um macaco:
//Atributos: Nome e bucho (estômago).
//Métodos: Comer, verBucho e digerir.
//Faça um programa e teste interativamente:
//Crie 2 macacos
//Alimente-os com 3 alimentos diferentes e verificando o conteúdo do estômago a cada refeição.
//Experimente fazer com que um macaco coma o outro. É possível criar um macaco canibal?
class Macaco {
    private _nome: string;
    private _bucho: string[];

    constructor(nome: string) {
        this._nome = nome;
        this._bucho = [];
    }

    get nome(): string {
        return this._nome;
    }       
    comer(alimento: string): void {
        this._bucho.push(alimento);
        console.log(`${this._nome} comeu ${alimento}.`);
    }
    verBucho(): void {
        console.log(`Bucho de ${this._nome}: ${this._bucho.join(", ") || "vazio"}`);
    }   
    digerir(): void {
        if (this._bucho.length > 0) {
            const ultimoAlimento = this._bucho.pop();
            console.log(`${this._nome} digeriu ${ultimoAlimento}.`);
        } else {
            console.log(`${this._nome} não tem nada para digerir.`);
        }
    }
}

const macaco1 = new Macaco("Macaco 1");
const macaco2 = new Macaco("Macaco 2");

macaco1.comer("banana");
macaco1.verBucho();
macaco1.digerir();
macaco1.verBucho();

macaco2.comer("maçã");
macaco2.verBucho();
macaco2.digerir();
macaco2.verBucho();
macaco1.comer("laranja");
macaco1.verBucho();
macaco1.digerir();
macaco1.verBucho();
macaco2.digerir();
macaco2.verBucho(); 
macaco2.comer("Macaco 1");
macaco2.verBucho();
macaco2.digerir();
macaco2.verBucho();