function startGame(user, gpu) {
    // != siginifica Si no son iguales... haz esto, basicamente lo contrario a si son iguales :)
    if (user != gpu) {
        // Como dijo Freddy en clases pasadas solo hay tres maneras en el que el usuario gana
        // A continucion tenemos dichos tres escenarios
        if (user == rock && gpu == scissor) {
            console.log('You win!');
        } else if (user == paper && gpu == rock) {
            console.log('You win!');
        } else if (user == scissor && gpu == paper) {
            console.log('You win!');
            // Si ninguno de los tres escenarios de arriba se cumple entonces gana la GPU
        } else {
            console.log('You lost!');
        }
        // Si las elecciones del usuario y del GPU son iguales cae en este else, quedaria en empate
    } else {
        console.log('Draw!');
    }
}