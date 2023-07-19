let prompt = require('prompt-sync')()

// Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior
// de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não.

let anoNasc = parseInt(prompt("Digite seu ano de nascimento: "))
const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();
let idade = anoAtual - anoNasc


if(idade >= 18){
    console.log("Você é maior de idade.")
} else {
    console.log("Você não é maior de idade.")
}