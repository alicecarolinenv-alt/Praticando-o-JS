function atv09() {
    let numero1 = Number(prompt("Digite o primeiro número:"))
    let numero2 = Number(prompt("Digite o segundo número:"))

    if (numero1 % numero2 === 0) {
        console.log(`${numero1} é multiplo de ${numero2}`)
    } else {
        console.log(`${numero1} não é multiplo de ${numero2}`)
    }
}
