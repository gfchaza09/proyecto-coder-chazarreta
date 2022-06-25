"use strict";

let respuestaBucle = prompt("¿Desea participar del sorteo del 9 de Julio?").toLowerCase();

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