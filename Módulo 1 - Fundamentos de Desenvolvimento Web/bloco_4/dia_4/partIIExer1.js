let palavra = 'arara';

function verificaPalidromo() {
    if (palavra == palavra.split('').reverse().join('')) {
        console.log(true);
    } else {
        console.log(false);
    }
}

verificaPalidromo();