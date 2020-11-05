const getUserName = require('./exercicio2');

describe('verifica a existência ou não do usuário (async/await)', () => {
  describe('se o usuário "id" existe', () => {
    test('retorne o nome', async () => {
      expect.assertions(1);
      const data = await getUserName(4);
      expect(data).toEqual('Mark' || 'Paul');
    })
  })
  
  describe('se o usuário "id" não existe', () => {
    test('retorne uma msg de Erro', async () => {
      expect.assertions(1);
      try {
        await getUserName(1);
      } catch (error) {
        expect(error).toEqual({
          error: 'Usuário não encontrado'
        })
      }
    })
  })
})