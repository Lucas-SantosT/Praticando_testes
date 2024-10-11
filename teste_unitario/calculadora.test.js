const {soma, subtracao} = require('./calculadora');

test('somando positivos 1 + 2 para ser igual a 3', () =>{
    expect(soma(1,2)).toBe(3);
});

test('somando negativos -1 + -2 para ser igual a -3', () =>{
    expect(soma(-1,-2)).toBe(-3);
});

test('subtraindo positivos 10 - 4 para ser igual a 6', () =>{
    expect(subtracao(10,4)).toBe(6);
});

test('subtraindo negativos -10 - -4 para ser igual a -14', () =>{
    expect(subtracao(-10,-4)).toBe(-6);
});