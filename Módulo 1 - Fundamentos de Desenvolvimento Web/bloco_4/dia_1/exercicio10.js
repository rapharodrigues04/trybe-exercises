let valorVenda = 13;
let custoProduto = ((10 * 20) / 100) + 10; // Isso que dizer que o custo é R$ 10,00 + 20% sob esse valor, totalizando 12,00 o custo unitário

if (valorVenda > 0 && custoProduto > 0) {
    let quantidadeVendida = 1000;
    let lucro = (valorVenda * quantidadeVendida) - custoProduto * quantidadeVendida;
    console.log('R$ ' + lucro);
} else {
    console.log('Números inválidos para cálculo')
}