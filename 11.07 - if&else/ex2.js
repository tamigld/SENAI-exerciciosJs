let prompt = require('prompt-sync')();

// Uma empresa decide dar aumento de 30% aos funcionários cujo
// salário é inferior a 500 reais. Escreva um programa que receba o
// salário de um funcionário e imprima o valor do salário reajustado ou
// uma mensagem caso o funcionário não tenha direito a aumento.

let salario = parseFloat(prompt("Digite o salário do funcionário: "))

if(salario <500){
    let novoSalario = salario + (salario * 0.3)
    console.log("O salário do funcionário está apto para o reajuste de 30% de aumento. Seu salário reajustado é de: R$" + novoSalario)
} else {
    console.log("O salário do funcionário não está apto para o reajuste (Deve ser menor que 500 reais).")
}