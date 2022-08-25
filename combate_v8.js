function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function choose(propiedad, valor) {
    let tipo
    if (valor == 1) {
        tipo = 'Piedra'
    } else if (valor == 2) {
        tipo = 'Papel'
    } else if (valor == 3) {
        tipo = 'Tijera'
    } else {
        tipo = 'Perder!!!'
    }
    return alert(propiedad + 'elige: ' + tipo);
}

let num1 = 1
let num2 = 3
let pc = aleatorio(num1, num2);
contador = 3
    // 1 = Piedra, 2 = Papel, 3 = Tijera.
while (contador > 0) {
    let jugador = prompt('Piedra, Papel o Tijera 1,2,3!!');
    choose('Jugador ', jugador);
    choose('pc ', pc);
    if (jugador == pc) {
        alert('Es un empate')
        status = false
    } else if (jugador == 1 && pc == 3) {
        alert('GANASTE!!')
        status = false
    } else if (jugador == 2 && pc == 1) {
        alert('GANASTE!!')
        status = false
    } else if (jugador == 3 && pc == 2) {
        alert('GANASTE!!')
        status = false
    } else {
        alert('HAS PERDIDO');
        contador--
    }
    document.write('Te quedan ' + contador + ' vidas!!')
}