const obj1 = require('./exercicio5');
const obj2 = require('./exercicio5');
const obj3 = require('./exercicio5');

test("Compare dois objetos (JSON) para verificar se são idênticos ou não", () => {
    expect(obj1).toEqual(obj3);
    expect(obj1).not.toEqual(obj2);
});