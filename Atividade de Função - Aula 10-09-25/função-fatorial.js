//Escreva uma função que calcule e retorne o fatorial de um número inteiro fornecido pelo usuário.


function calcularFatorial(numero) {
    let fatorial = 1; 
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    return fatorial; 
}

let numero = 5; 
let resultado = calcularFatorial(numero);

console.log("O fatorial de", numero, "é:", resultado);