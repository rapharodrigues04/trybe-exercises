const sum = require('./exercicio1');

describe('sum', () => {

    test('Teste se o retorno de sum(4, 5) é 9', () => { //Pode ser usado o 'test' ou 'it na descrição'
        expect(sum(4, 5)).toBe(9);
    });

    it('Teste se o retorno de sum(0, 0) é 0', () => { //Pode ser usado o 'test' ou 'it na descrição'
        expect(() => {
            sum(4, '5');
        }).toThrow();
    });

    test('Teste se a função sum lança um erro quando os parametros são 4 e "5"(string 5)', () => { //Pode ser usado o 'test' ou 'it na descrição'
        expect(sum(0, 0)).toBe(0);
    });

});

// O teste poderá ser executado tanto dentro quanto fora do describe (conforme exemplo).

it('Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")"', () => { //Pode ser usado o 'test' ou 'it na descrição'
    expect(() => {
        sum(4, '5');
    }).toThrow(/parameters must be numbers/);
});