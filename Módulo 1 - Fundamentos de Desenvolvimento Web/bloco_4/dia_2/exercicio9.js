let array1a25 = [];

for (let i = 1; i <= 25; i++) {
    array1a25.push(i);
}

console.log(array1a25); // Esse console imprime os números de 1 a 25.

array1a25 = array1a25.map(function(num){
    return num / 2;
})

let resultado = array1a25;
console.log(resultado); //Esse console imprime todos os números do array divididos por 2.