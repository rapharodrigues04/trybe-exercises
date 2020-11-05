let primeiroNumero = 15;
let segundoNumero = 20;
let terceiroNumero = 35

if (primeiroNumero > segundoNumero && primeiroNumero > terceiroNumero) {
    return primeiroNumero;
} else if (segundoNumero > primeiroNumero && segundoNumero > terceiroNumero){
    return segundoNumero;
} else {
    return terceiroNumero;
}