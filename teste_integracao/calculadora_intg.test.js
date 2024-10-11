const {calcularOperacao} = require('../teste_unitario/calculadora');

test('calcular soma de 1 e 2 deve retornar 3', () => {
    expect(calcularOperacao(1, 2, 'soma')).toBe(3);
});

test('calcular subtração de 5 e 2 deve retornar 3', () => {
    expect(calcularOperacao(5, 2, 'subtracao')).toBe(3);
});

// Teste de Operador Inválido
test('calcular operação com operador inválido deve lançar um erro', () => {
    expect(() => calcularOperacao(5, 2, 'invalido')).toThrow('Operador inválido');
});