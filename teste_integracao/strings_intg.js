function inverterString(str) {
    return str.split('').reverse().join('');
}

function contarVogais(str) {
    const vogais = 'aeiouAEIOU';
    let contador = 0;

    for (let char of str) {
        if(vogais.includes(char)) {
            contador ++;
        }
    }
    return contador;
}

function contarVogaisInversas(str) {
    const stringInvertida = inverterString(str);
    return contarVogais(stringInvertida);
}

module.exports = {inverterString,contarVogais,contarVogaisInversas};