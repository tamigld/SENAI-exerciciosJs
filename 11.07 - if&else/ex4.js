let prompt = require('prompt-sync')();

// Faça um programa que receba um número do usuário e informe
// se este número é par ou ímpar.

let numero = parseInt(prompt("Digite o número desejado: "))

if(numero % 2 === 0){
    console.log("O número " + numero + " é par!")
} else {
    console.log("O número " + numero + " é ímpar!")
}