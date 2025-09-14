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