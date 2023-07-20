import promptSync from "prompt-sync"
let prompt = promptSync()


export function exercicio8(){

    console.log("Exercício: Faça um programa que receba a idade do usuário, enquanto a resposta do usuário for menor que 18 anos continue a solicitar a idade e mostre uma mensagem quando a idade do usuário for maior que 18.")

    let idade = parseInt(prompt("Qual a sua idade: "))

    while(idade < 18){
        idade = parseInt(prompt("Qual a sua idade: "))
    }
    console.log(`Sua idade é de ${idade}.`)
}