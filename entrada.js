const readline = require('readline-sync');

function solicitarValor() {
    let valor;
    do {
        valor = parseInt(readline.question('Informe o valor a ser sacado (inteiro positivo): '), 10);
        if (valor <= 0 || isNaN(valor)) {
            console.log('Por favor, insira um valor válido (inteiro positivo).');
        }
    } while (valor <= 0 || isNaN(valor));
    return valor;
}

module.exports = { solicitarValor };