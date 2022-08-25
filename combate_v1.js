// Función para generar numeros aleatorios entre un rango asignado
function generateRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
// La computadora elige aleatoreamente un número entre 1 y 3
let eleccionpc = GenerarNumerosEnterosAleatorios(1, 3)
if (eleccionpc == 1) {
    eleccionpc = "piedra"
} else if (eleccionpc == 2) {
    eleccionpc = "papel"
} else if (eleccionpc == 3) {
    eleccionpc = "tijera"
}

//El jugador elige: 1 es piedra, 2 es papel, 3 es tijera
let eleccionjugador = 0
eleccionjugador = prompt("Elige 1 para piedra, 2 para papel, 3 para tijera")
if (eleccionjugador == 1) {
    eleccionjugador = "piedra"
} else if (eleccionjugador == 2) {
    eleccionjugador = "papel"
} else if (eleccionpc == 3) {
    eleccionjugador = "tijera"
}

//variable resultado
let resultado = 0

//Cuando el jugador gana
if ((eleccionjugador == "piedra" && eleccionpc == "tijera") ||
    (eleccionjugador == "papel" && eleccionpc == "piedra") ||
    (eleccionjugador == "tijera" && eleccionpc == "papel")) {
    resultado = "GANASTE"
} else if (eleccionjugador == eleccionpc) {
    resultado = "EMPATARON"
        //Cuando el jugador pierde
} else {
    resultado = "PERDISTE"
}

//Imprimir resultado
alert("Elegiste " + eleccionjugador + "\nLa computadora eligió " + eleccionpc + "\nResultado: " + resultado)