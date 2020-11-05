const uppercase = require('./exercicio1');

it('Verifica se o retorno da função é MAIUSCULO', (done) => {
  uppercase('string', (str) => {
    expect(str).toBe('STRING');
    done();
  })
});
