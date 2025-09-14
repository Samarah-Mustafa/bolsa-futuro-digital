//Escreva uma função que retorne a área de um triângulo, a partir dos valores de base e altura fornecidos.

function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

let base = 10;      
let altura = 5;     

let area = calcularAreaTriangulo(base, altura);

console.log("A área do triângulo é:", area);