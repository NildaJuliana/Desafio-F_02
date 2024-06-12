function calcularNivelHeroi(quantVitorias, quantDerrotas) {
    let saldoVic = quantVitorias - quantDerrotas;
    let nivel = "";

    switch (true) {
        case (quantVitorias < 10):
            nivel = "ferro";
            break;
        case (quantVitorias <= 21):
            nivel = "bronze";
            break;
        case (quantVitorias <= 51):
            nivel = "prata";
            break;
        case (quantVitorias <= 80):
            nivel = "ouro";
            break;
        case (quantVitorias <= 90):
            nivel = "diamante";
            break;
        case (quantVitorias <= 100):
            nivel = "lendário";
            break;
        case (quantVitorias >= 101):
            nivel = "imortal";
            break;
        default:
            nivel = "ferro"; // Nível padrão caso nenhuma condição seja atendida
    }

    return { saldoVic, nivel };
}

const quantVitorias = 48;
const quantDerrotas = 7;

const resultado = calcularNivelHeroi(quantVitorias, quantDerrotas);
console.log("O herói tem um saldo de " + resultado['saldoVic'] + " e está no nível de " + resultado['nivel']);

module.exports = calcularNivelHeroi;
