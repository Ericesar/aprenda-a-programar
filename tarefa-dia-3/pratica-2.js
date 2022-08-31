const multiplicador = 7
let n = 10
let i = 1

while (i <= n) {
    const resultado = i*multiplicador
    const valorExibido = `${multiplicador} X ${i} = ${resultado}`
    console.log(valorExibido)
    i++
}