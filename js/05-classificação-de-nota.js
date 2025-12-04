function atv05(){
    let nota = Number(prompt("Digite sua nota:"))

if (nota >= 0 && nota <= 4) {
    console.log(`Sua nota ${nota}  está baixa, estude mais da próxima vez!`)
    alert(`Sua nota ${nota} está baixa, estude mais da próxima vez!`)
} else if (nota >= 5 && nota <= 7) {
    console.log(`Sua nota ${nota} está na média, procure melhorar ainda mais!`)
    alert(`Sua nota ${nota} está na média, procure melhorar ainda mais!`)
} else if (nota >= 8 && nota <= 10) {
    console.log(`Sua nota ${nota} está alta, parabéns!<3`)
    alert(`Sua nota ${nota} está alta, parabéns!<3`)
} else {

}
}