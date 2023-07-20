export function exercicio7(){
    console.log("Exercício: Calcular a soma dos números de 1 a 100 utilizando a estrutura while.")

    let contador = 0
    let soma = 0

    while(contador <= 100){
        soma = soma + contador
        contador++
        console.log(soma)
    }
}