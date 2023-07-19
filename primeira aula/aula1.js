console.log("Exemplo 4")

let prompt = require("prompt-sync")();

let primeiraNota = parseFloat(prompt("Digite a primeira nota: "))
let segundaNota = parseFloat(prompt("Digite a segunda nota: "))

let soma = primeiraNota + segundaNota

let media = soma / 2

console.log("média: " + media)