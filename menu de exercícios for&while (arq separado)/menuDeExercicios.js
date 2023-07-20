// Fazer um menu de exercícios utilizando exemplos dado em aula (6 exercícios dentro de funções, 
// e incluir nome ou algo de sua preferência para criar um objeto e manipulá-lo)

import promptSync from "prompt-sync"
let prompt = promptSync()

import { exercicio1 } from "./moduloEx1.js";
import { exercicio2 } from "./moduloEx2.js";
import { exercicio3 } from "./moduloEx3.js";
import { exercicio4 } from "./moduloEx4.js";
import { exercicio5 } from "./moduloEx5.js";
import { exercicio6 } from "./moduloEx6.js";
import { exercicio7 } from "./moduloEx7.js";
import { exercicio8 } from "./moduloEx8.js";
import { exercicio9 } from "./moduloEx9.js";
import { exercicio10 } from "./moduloEx10.js";



let resposta;


do {
    console.log("Bem vindo ao menu de exercícios!")   
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
        case "7":
            console.log("Você escolheu o exercício 7.")
            exercicio7()
        break
        case "8":
            console.log("Você escolheu o exercício 8.")
            exercicio8()
        break
        case "9":
            console.log("Você escolheu o exercício 9.")
            exercicio9()
        break
        case "10":
            console.log("Você escolheu o exercício 10.")
            exercicio10()
        break
        default:
            console.log("Você não escolheu nenhum exercício.")
    }
} while (resposta != "sair");