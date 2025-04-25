const cedulas = [100, 50, 20, 10, 5, 2, 1];

function calcularNotas(valor) {
    const resultado = {};
    let restante = valor;

    for (const cedula of cedulas) {
        if (restante >= cedula) {
            const quantidade = Math.floor(restante / cedula);
            resultado[cedula] = quantidade;
            restante -= quantidade * cedula;
        }
    }

    return resultado;
}

module.exports = { calcularNotas };