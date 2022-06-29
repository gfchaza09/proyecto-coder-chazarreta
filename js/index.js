"use strict";

const sorteo = () => {
    if (numeroGanador == 0) {
        numeroGanador = Math.floor(Math.random()*199 + 1);
    }
    return `El número ganador del sorteo anterior es el: ${numeroGanador}`;
}

const ingresarSorteo = () => {
    let respuestaBucle = "";
    while (respuestaBucle != "no") {
        let nombre = prompt("Ingrese su nombre: ");
        let apellido = prompt("Ingrese su apellido: ");
        let dni = prompt("Ingrese su DNI: ");
        let numeroRifa = parseInt(prompt("Ingrese un número entre 1 y 200: "));
        if (numeroRifa >= 0 && numeroRifa <=201) {
            alert(`Muchas gracias por participar ${nombre} ${apellido}. Su número es ${numeroRifa}, en caso de ganar debe presentar el DNI ingresado: ${dni}`);
            respuestaBucle = "no";
        } else {
            respuestaBucle = prompt("El número ingresado es incorrecto. ¿Desea volver a intentar?").toLowerCase();
        }
    }
}

let respuesta = 0;
let numeroGanador = 0;

do {
    respuesta = parseInt(prompt("MENÚ \n\n Ingresa una opción: \n 1 - Elegir número para el sorteo. \n 2 - Conocer el número del sorteo anterior. \n 3 - Salir"));
    
    switch (respuesta) {
        case 1:
            alert("Bienvenido al sorteo...");
            ingresarSorteo();
            break;
        case 2:
            alert(`Sorteo del 25/06 \n ${sorteo()}` );
            break;
        case 3:
            alert("¡Disfruta de nuestro sitio web!");
            break;
        default:
            alert("No elegiste una opción válida.");
    }
} while (respuesta !== 3)
