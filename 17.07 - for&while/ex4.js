let prompt = require('prompt-sync')()

// Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.

let num = parseInt(prompt("Digite um número até 10: "))

if(num > 10){
    console.log("Esse número é maior que 10.")
} else {
    for(let conta = 1; conta <= 10; conta++){
        console.log(`${conta} x ${num} = ${num * conta}`)
    }    
}


