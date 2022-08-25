function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function eleccion(num) {
    if (num == 1) {
        return "✊"
    }
    if (num == 2) {
        return "📄"
    }
    if (num == 3) {
        return "✂️"
    }
}
// 1 es piedra, 2 papel, 3 tijera
let jugador = 0
let pc = aleatorio(1, 3)
jugador = prompt("Elige: 1 para piedra, 2 para papael 3 para tijera")

alert("Elegiste " + eleccion(jugador))
alert("PC elige " + eleccion(pc))

if (pc == jugador) {
    alert("EMPATE")
} else if ((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)) {
    alert("Ganaste")
} else {
    alert("Perdiste")
}