let prompt = require('prompt-sync')()

// Escreva um programa que solicita ao usuário seu peso em quilogramas e sua altura em metros.
// Em seguida, calcule o Índice de Massa Corporal (IMC) utilizando a fórmula: IMC = peso / (altura
// * altura). Com base no resultado, exiba uma mensagem indicando a faixa de peso em que o
// usuário se encontra, de acordo com a tabela a seguir:
    // IMC menor que 18.5: Abaixo do peso
    // IMC de 18.5 a 24.9: Peso normal
    // IMC de 25.0 a 29.9: Sobrepeso
    // IMC de 30.0 a 34.9: Obesidade grau 1
    // IMC de 35.0 a 39.9: Obesidade grau 2
    // IMC maior ou igual a 40.0: Obesidade grau 3

let peso = parseFloat(prompt("Digite seu peso (kg): "))
let altura = parseFloat(prompt("Digite sua altura (em metros): "))

let imc = peso / (altura * altura)

switch(true){
    case imc < 18.5:
        console.log(imc.toFixed(2))
        console.log("Você está abaixo do peso.")
        break
    case imc >= 18.5 && imc <=24.9:
        console.log(imc.toFixed(2))
        console.log("Você está com o peso normal.")
        break
    case imc >= 25 && imc <=29.9:
        console.log(imc.toFixed(2))
        console.log("Você está com sobrepeso.")
        break
    case imc >= 30 && imc <=34.9:
        console.log(imc.toFixed(2))
        console.log("Você está com obesidade grau 1.")
        break
    case imc >= 35 && imc <=39.9:
        console.log(imc.toFixed(2))
        console.log("Você está com obesidade grau 2.")
        break
    default:
        console.log(imc.toFixed(2))
        console.log("Você está com obesidade grau 3.")
        break
}