export function exercicio5(){
    console.log("Exercício: Imprimir os primeiros 10 números da sequência de Fibonacci.")

    let f = [];
    f[0] = 0
    f[1] = 1

    for(let n = 2; n < 10; n++){
        f[n] = f[n - 1] + f[n - 2]
    }
    console.log(f)
}