function atv07() {
    let numero1 = Number(prompt("Digite o primeiro número"))
let numero2 = Number(prompt("Digite o segundo número"))
let operacao = prompt("Digite a operação (+, -, *, /):")
let resultado;

switch (operacao) {
    case "+":
        resultado = numero1 + numero2
        console.log("Você selecionou a adição!");
        console.log(resultado)
        break;

    case "-":
        resultado = numero1 - numero2
        console.log("Você selecionou a subtração!")
        console.log(resultado)
        break;

    case "*":
        resultado = numero1 * numero2
        console.log("Você selecionou a multiplicação!")
        console.log(resultado)

        break;


    case "/":
        resultado = numero1 / numero2
        console.log("Você selecionou a divisão!")
        console.log(resultado)

        break;

    default:
        console.log("Operador inválido!")
        break;
}
}
