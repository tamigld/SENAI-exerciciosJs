let prompt = require('prompt-sync')()

// Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o
// nome de usuário é admin e a senha é senha123. Exiba uma mensagem indicando se o login
// foi bem-sucedido ou não.

let user = prompt("Digite seu nome de usuário: ")
let password = prompt("Digite sua senha: ")

if(user === "admin" && password === "senha123"){
    console.log("Login bem-sucedido.")
} else {
    console.log("Login incorreto. Verifique e tente novamente.")
}