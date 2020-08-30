let numbers = [5, 9, 3, 19, 200, 8, 0, 2, 35, 700];
let maiorValor = 0;

for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] > maiorValor){
        maiorValor = numbers[i];
    }
}

console.log(`O maior valor dentro do array numbers é ${maiorValor}.`);