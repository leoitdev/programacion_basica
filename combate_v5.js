let player = prompt("Elige una opción\n 1 Piedra \n 2 Papel \n 3 Tijeras");
let pc = Math.floor(Math.random() * (3 - 1 + 1) + 1);
console.log(pc);
let winner = player == pc ? alert("Empate") :
    player == 1 && pc == 2 ? alert(`Elegiste ${player} y Pc eligio ${pc} perdiste`) :
    player == 3 && pc == 1 ? alert(`Elegiste ${player} y Pc eligio ${pc} perdiste`) :
    alert("Numero erroneo")