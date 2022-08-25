function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// 1 es piedra, 2 es papel, 3 es tijera
let jugador = 0;
let pc = random(1, 3);
jugador = prompt("Elige: 1 es ✊, 2 es  📄, 3 es ✂️")


function condition(name, variable) {
    if (variable == 1) alert(`${name} eligió ✊`);
    else if (variable == 2) alert(`${name} eligió  📄`);
    else if (variable == 3) alert(`${name} eligió ✂️`);
    else alert("Elije una opción válida");
}

condition("Elkin", jugador);
condition("PC", pc);
kombat(jugador, pc);

// COMBATE 
function kombat(player1, player2) {
    if (!player1 || !player2) {
        alert("BATALLA CANCELADA");
        return;
    }

    if (player1 == player2) alert("Es un EMPATE")
    else if (
        (player1 == 1 && player2 == 2) ||
        (player1 == 2 && player2 == 3) ||
        (player1 == 3 && player2 == 1)
    ) alert("PERDISTE");
    else alert("GANASTE :D")
}