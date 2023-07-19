// Imprimir os primeiros 10 números da sequência de Fibonacci.
// primeiros 10 números da sequência: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
// fórmula: Fn = fn-1 + Fn-2

let f = [];
f[0] = 0
f[1] = 1

for(let n = 2; n < 10; n++){
    f[n] = f[n - 1] + f[n - 2]
}
console.log(f)