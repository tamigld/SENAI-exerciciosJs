let prompt = require('prompt-sync')();

// Faça um programa que receba o nome, cargo e salário de um
// funcionário. Se o funcionário ganhar abaixo de 1000 reais, calcule o
// salário acrescido de 10%. Ao final exiba o nome, o cargo e o salário
// desse funcionário.

let nome = prompt("Digite o nome do funcionário: ")
let cargo = prompt("Digite o cargo do funcionário " + nome + ": ")
let salario = parseFloat(prompt("Digite o salário do funcionário " + nome + ": "))

if(salario <1000){
    console.log("Salário abaixo de 1000 reais terá aumento de 10%.")
    let novoSalario = salario + (salario * 0.1)
    console.log("O funcionário(a) " + nome + " com o cargo de " + cargo + " teve o salário de R$" + salario.toFixed(2) + " reajustado para: R$" + novoSalario.toFixed(2) + ".")
} else {
    console.log("Salário acima de 1000 reais não está apto para aumento.")
}