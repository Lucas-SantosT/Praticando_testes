const {contarVogaisInversas} = require('./strings_intg');

test('contar as vogais da palavra invertida "hello" deve resultar em 2', ()=>{
    expect(contarVogaisInversas('hello')).toBe(2);
});

test('contar as vogais da palavra invertida "programacao" deve resultar em 5', ()=>{
    expect(contarVogaisInversas('programacao')).toBe(5);
});