const {inverterString,contarVogais} = require('./strings');

test('inverter a palavra "hello" para a palavra "olleh"', () =>{
    expect(inverterString('hello')).toBe('olleh');
});

test('inverter a palavra "world" para a palavra "dlrow"', () =>{
    expect(inverterString('world')).toBe('dlrow');
});

test('contar as vogais da palavra "hello" deve retornar 2', () =>{
    expect(contarVogais('hello')).toBe(2);
});

test('contar as vogais da palavra "world" deve retornar 1', () =>{
    expect(contarVogais('world')).toBe(1);
});

