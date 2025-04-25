const entrada = require('./caixa/entrada');
const calculo = require('./caixa/calculo');
const exibicao = require('./caixa/exibicao');

function main() {
    const valor = entrada.solicitarValor();
    const resultado = calculo.calcularNotas(valor);
    exibicao.exibirResultado(resultado);
}

main();