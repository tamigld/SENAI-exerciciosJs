let prompt = require('prompt-sync')()

// Imagine uma loja de roupas que dê um desconto ao cliente, dependendo do valor que ele
// pague. Faça um programa para loja, que solicite o valor total da compra ao usuário e assim,
// aplique um desconto de acordo com o valor total da compra. Siga a tabela:
// Valor total da compra até R$ 100,00: sem desconto.
// Valor total da compra de R$ 100,01 a R$ 200,00: desconto de 10%.
// Valor total da compra acima de R$ 200,00: desconto de 20%.
// Exiba o valor final da compra com o desconto aplicado.

let valor = parseFloat(prompt("Digite o valor total da compra do cliente: R$"))

switch(true){
    case valor <= 100:
        console.log("Esse valor não tem direito a desconto.") 
        break
    case valor > 100 && valor <= 200:
        console.log("Esse valor tem desconto de 10%. O valor final é de: R$" + (valor - (valor * 0.1)).toFixed(2))
        break
    default:
        console.log("Esse valor tem desconto de 20%. O valor final é de: R$" + (valor - (valor * 0.2)).toFixed(2))
}