//Crie uma função que receba um número e retorne seu fatorial.
// Função escrita de forma tradicional (normal)
function fatorial(number) {
    let result = number;
    for (let i = 1; i < number; i += 1) {
        result = result * i;
    }
    return result;
}

console.log(fatorial(5));

// -----------------------
//Function Utilizando o Arrow Function
const fatorial = number => {
    let result = number;
    for (i = 1; i < number; i += 1) {
        result = result * i;
    }
    return result;
}

console.log(fatorial(5));