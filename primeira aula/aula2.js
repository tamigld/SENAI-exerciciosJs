//OPERADORES LÓGICOS
// OU (||)
// E &&
// NÃO (!)

//hoje não estpa chovendo = true/verdade
//hoje é terça = true

//se hoje tá chovendo e hoje é terça
//então eu vou ficar em casa

//NÃO (!)
//!true = false

//------------
// quero validar se o número digitado pelo usuário
// está no intervalo entre 10 e 20

//EXEMPLO 1

let prompt = require('prompt-sync')();

// let numero = parseInt(prompt("Digite um número: "));

// if(numero >=10 && numero <=20){
//     console.log("O número " + numero + " está no intervalo entre 10 e 20.")
// } else {
//     console.log("O número " + numero + " NÃO está no intervalo entre 10 e 20.")
// }


//EXEMPLO 2

let animal = prompt("Digite o nome do animal para saber o que ele tem a dizer: ")

switch(animal){
    case 'cachorro':
        console.log("🦮 Au au")
    break
    case 'gato':
        console.log("🐈‍⬛ Miau")
    break
    case 'vaca':
        console.log("🐄 Muuuu")
    break
    case 'papagaio':
        console.log("🦜 você foi a culpa desse amor acabar...")
    default:
        console.log("não conheço esse animal!")
}
