let nome = "Rainha";
let validaNome = nome.toLowerCase();


switch (validaNome) {
    case 'rei':
        console.log('É o rei');
        break;
    case 'rainha':
        console.log('É a rainha');
        break;
    case 'bispo':
        console.log('É o bispo');
        break;
    case 'torre':
        console.log('É a torre');
        break;
    case 'cavalo':
        console.log('É o cavalo');
        break;
    case 'peao':
        console.log('É o peão');
        break;
    default:
        console.log('Esse nome é inválido');
        break;
}