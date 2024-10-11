function soma (a, b){
    return a + b;
}

function subtracao (a, b){
    return a - b;
}

function calcularOperacao (a, b, operador){
    switch (operador) {
        case 'soma':
            return soma(a,b);
        case 'subtracao':
            return subtracao(a,b);
        default:
            throw new Error('Operador inválido');        
    }
}

module.exports = { soma, subtracao, calcularOperacao };