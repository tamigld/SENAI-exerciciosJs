let prompt = require('prompt-sync')();

// Faça um programa que receba um número inteiro do usuário e informe
// se este número é positivo ou negativo.

let numero = parseInt(prompt("Digite o número desejado: "))

if(numero > 0){
    console.log("O número " + numero + " é positivo!")
} else if(numero < 0){
    console.log("O número " + numero + " é negativo!")
} else{
    console.log("O número 0 é neutro.")
}