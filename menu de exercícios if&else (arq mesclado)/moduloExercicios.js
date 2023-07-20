import PromptSync from "prompt-sync";
let prompt = PromptSync()

export function exercicio1(){
    let user = prompt("Digite seu nome de usuário: ")
    let password = prompt("Digite sua senha: ")
    
    if(user === "admin" && password === "senha123"){
        console.log("Login bem-sucedido.")
    } else {
        console.log("Login incorreto. Verifique e tente novamente.")
    }
}

export function exercicio2(){
    let num = parseInt(prompt("Digite um número entre 1 e 7: "))

    switch(num){
        case 1:
            console.log("É segunda-feira!")
            break
        case 2:
            console.log("É terça-feira!")
            break
        case 3:
            console.log("É quarta-feira!")
            break
        case 4:
            console.log("É quinta-feira!")
            break
        case 5:
            console.log("É sexta-feira!")
            break
        case 6:
            console.log("É sábado!")
            break
        case 7:
            console.log("É domingo!")
            break
        default:
            console.log("Esse não é um número entre 1 e 7.")
    }
}

export function exercicio3(){
    console.log("Digite três números em ordem e verificamos se está em ordem crescente ou decrescente.")

    let num1 = parseInt(prompt("Digite o primeiro número: "))
    let num2 = parseInt(prompt("Digite o segundo número: "))
    let num3 = parseInt(prompt("Digite o terceiro número: "))

    if(num1 < num2 && num2 < num3){
        console.log("Os números estão em ordem crescente.")
    } else if(num1 > num2 && num2 > num3){
        console.log("Os números estão em ordem decrescente.")
    } else{
        console.log("OS números não estão ordenados.")
    }
}

export function exercicio4(){
    let anoNasc = parseInt(prompt("Digite seu ano de nascimento: "))
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    let idade = anoAtual - anoNasc


    if(idade >= 18){
        console.log("Você é maior de idade.")
    } else {
        console.log("Você não é maior de idade.")
    }
}

export function exercicio5(){
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
}

export function exercicio6(){
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
}
