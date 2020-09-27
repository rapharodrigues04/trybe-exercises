//Crie uma função que receba uma frase e retorne qual a maior palavra.

function biggerWord(longestWord) {
    let arrayString = longestWord.split(' ');
    let bigger = 0;
    let word = '';
    arrayString.forEach(function (items) {
        if (bigger < items.length) {
            bigger = items.length;
            word = items;
        }
    })
    return word;
}

console.log(biggerWord("Antonio foi no banheiro e não sabemos o que aconteceu"))

// --------------------------

const biggerWord = longestWord => longestWord.split(' ').sort((item1, item2) => item2.length - item1.length)[0];

console.log(biggerWord("Antonio foi no banheiro e não sabemos o que aconteceu"))