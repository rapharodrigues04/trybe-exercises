let n = 5;

for (var i = 0; i < n; i++) {
    var linhaDeAsteriscos = '';

    for (var i2 = 0; i2 <= i; i2++) {
        linhaDeAsteriscos = linhaDeAsteriscos + '*';
    }
    console.log(linhaDeAsteriscos);
}