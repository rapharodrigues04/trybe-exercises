const getUserName = require('./exercicio2');

describe('verifica a existência ou não do usuário', () => {
  describe('se o usuário "id" existe', () => {
    test('retorne o seu nome', () => {
      expect.assertions(1);
      return getUserName(4).then(data => expect(data).toEqual('Mark' || 'Paul'))
    })
  })

  describe('se o usuário "id" não existe', () => {
    test('retorne uma msg de Erro', () => {
      expect.assertions(1);
      return getUserName(2).catch(error =>
        expect(error).toEqual({ error: 'Usuário não encontrado' })
        )
    })
  })
})