// BATALLA
if (jugador == pc) {
    alert("EMPATE");
} else if (
    (jugador == 1 && pc == 3) ||
    (jugador == 2 && pc == 1) ||
    (jugador == 3 && pc == 2)
) {
    alert("GANASTE! πππ₯³π₯π");
} else {
    alert("Perdiste π­πΏπ₯");
}