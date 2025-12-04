function atv06() {
    let peso = Number(prompt("Digite seu peso por gentileza (kg):"));
    let altura = Number(prompt("Digite sua altura por gentileza (m):"));

    let imc = peso / (altura * altura);
    console.log(imc)


    if (imc < 18.5) {
        console.log("Você está abaixo do peso")
        alert("Você está abaixo do peso")

    } else if (imc >= 18.5 && imc <= 24.9) {
        console.log("Seu peso está normal")
        alert("Seu peso está normal")

    } else {
        console.log("Você está acima do peso")
        alert("Você está acima do peso")

    }

}
