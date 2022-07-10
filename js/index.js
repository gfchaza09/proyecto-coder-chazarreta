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
        let numeroSorteo = parseInt(prompt("Ingrese un número entre 1 y 200: "));
        if (numeroSorteo > 0 && numeroSorteo <=200 && !arrayNumerosElegidos.includes(numeroSorteo)) {
            alert(`Muchas gracias por participar ${nombre} ${apellido}. Su número es ${numeroSorteo}, en caso de ganar debe presentar el DNI ingresado: ${dni}`);
            arraySorteo.push({nombre, apellido, dni, numeroSorteo});
            arrayNumerosElegidos = arraySorteo.map(numero => numero.numeroSorteo);
            respuestaBucle = "no";
        } else {
            if(numeroSorteo <= 0 || numeroSorteo >200) {
                respuestaBucle = prompt(`El número ingresado (${numeroSorteo}) es incorrecto. ¿Desea volver a intentar?`).toLowerCase();
            } else if (arrayNumerosElegidos.includes(numeroSorteo)) {
                respuestaBucle = prompt(`El número ingresado (${numeroSorteo}) ya fue elegido. ¿Desea volver a intentar?`).toLowerCase();
            }
        }
    }
}

let respuesta = 0;
let numeroGanador = 0;
let arraySorteo = [];
let arrayNumerosElegidos= [];

do {
    respuesta = parseInt(prompt("MENÚ \n\n Ingresa una opción: \n 1 - Elegir número para el sorteo. \n 2 - Conocer el número del sorteo anterior. \n 3 - Ver lista de participantes para el sorteo (en consola). \n 4 - Ver lista de números que ya no están disponibles para el sorteo. \n 5 - Salir"));
    
    switch (respuesta) {
        case 1:
            alert("Bienvenido al sorteo...");
            ingresarSorteo();
            break;
        case 2:
            alert(`Sorteo del 25/06 \n ${sorteo()}` );
            break;
        case 3:
            for (const participante of arraySorteo) {
                console.log(participante);
            }
            break;
        case 4:
            alert(`Lista de números que no están disponibles: ${arrayNumerosElegidos.join(", ")}`);
            break;
        case 5:
            alert("¡Disfruta de nuestro sitio web!");
            break;
        default:
            alert("No elegiste una opción válida.");
    }
} while (respuesta !== 5)
