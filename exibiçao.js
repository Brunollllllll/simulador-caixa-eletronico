function exibirResultado(resultado) {
    console.log('Notas entregues:');
    for (const cedula in resultado) {
        if (resultado[cedula] > 0) {
            console.log(`${resultado[cedula]} nota(s) de R$ ${cedula}`);
        }
    }
}

module.exports = { exibirResultado };