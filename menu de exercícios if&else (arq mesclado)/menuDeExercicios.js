// Fazer um menu de exercícios utilizando exemplos dado em aula (6 exercícios dentro de funções, 
// e incluir nome ou algo de sua preferência para criar um objeto e manipulá-lo)

import promptSync from "prompt-sync"
let prompt = promptSync()

import { exercicio1, exercicio2, exercicio3, exercicio4, exercicio5, exercicio6 } from "./moduloExercicios.js";



let resposta;


do {
    console.log("Bem vindo ao menu de exercícios - IF e ELSE!")   
    resposta = prompt("Digite um número de 1 a 6 para escolher um exercício, ou 'sair' para interromper o programa: ")

    switch(resposta){
        case "1":
            console.log("Você escolheu o exercício 1.")
            exercicio1()
        break
        case "2":
            console.log("Você escolheu o exercício 2.")
            exercicio2()
        break
        case "3":
            console.log("Você escolheu o exercício 3.")
            exercicio3()
        break
        case "4":
            console.log("Você escolheu o exercício 4.")
            exercicio4()
        break
        case "5":
            console.log("Você escolheu o exercício 5.")
            exercicio5()
        break
        case "6":
            console.log("Você escolheu o exercício 6.")
            exercicio6()
        break

        default:
            console.log("Você não escolheu nenhum exercício.")
    }
} while (resposta != "sair");