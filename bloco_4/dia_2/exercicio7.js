let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorValor = 100000;
//Nesse caso tive que criar uma variável com um valor que seja maior que o maior número dentro do array numbers.

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < menorValor) {
        menorValor = numbers[i];
    }
}

console.log(`O menor valor dentro do array numbers é ${menorValor}`);