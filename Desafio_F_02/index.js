//Calculadora de Partidas Rankeadas || Desafio DIO Felipão 

let quantVitorias = 0
let quantDerrotas = 0
let saldoVic = 0
let nivel = 0

console.log("O herói tem um saldo de " + saldoVic + "e está no nível de " + nivel +)

switch (true){
    case quantVitorias < 10:
        nivel = "ferro"
        break; 
    case quantVitorias <= 21:
        nivel = "bronze"
        break;
    case quantVitorias <= 51:
        nivel = "prata"
        break; 
    case quantVitorias <= 80:
        nivel = "ouro"
        break;
    case quantVitorias <= 90:
        nivel = "diamante"
        break; 
    case quantVitorias <= 100: 
        nivel = "lendário"
        break;
    case quantVitorias <=101:
        nivel = "imortal"
        break; 

}

return saldoVic; 
