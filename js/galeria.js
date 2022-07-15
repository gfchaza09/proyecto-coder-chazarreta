"use strict";

const defaultGallery = (gallery, btn) => {
    gallery.classList.add("gallery-active");
    btn.parentNode.classList.add("list__item--active");
};

const showGallery = (gallery, arrGallery, btn, arrBtn) => {
    gallery.classList.add("gallery-active");
    btn.parentNode.classList.add("list__item--active");

    for (const nodeGallery of arrGallery) {
        if (nodeGallery !== gallery) {
            nodeGallery.classList.remove("gallery-active");
        }
    }

    for (const button of arrBtn) {
        if (button !== btn) {
            button.parentNode.classList.remove("list__item--active");
        }
    }
};

// Botones de la sección
const btnEstablecimiento = document.getElementById("btnEstablecimiento");
const btnPizzaVarios = document.getElementById("btnPizzaVarios");
const btnNuestraGente = document.getElementById("btnNuestraGente");
const btnPersonas = document.getElementById("btnPersonas");

// Galerías de la sección
const establecimiento = document.getElementById("establecimiento");
const pizzaVarios = document.getElementById("pizzaVarios");
const nuestraGente = document.getElementById("nuestraGente");
const personas = document.getElementById("personas");

// Array de botones
const arrBotones = [btnEstablecimiento,btnPizzaVarios,btnNuestraGente,btnPersonas];

// Array de galerías
const arrGalerias = [establecimiento, pizzaVarios, nuestraGente, personas];

btnEstablecimiento.addEventListener("click", () => {
    showGallery(establecimiento, arrGalerias, btnEstablecimiento, arrBotones);
});

btnPizzaVarios.addEventListener("click", () => {
    showGallery(pizzaVarios, arrGalerias, btnPizzaVarios, arrBotones);
});

btnNuestraGente.addEventListener("click", () => {
    showGallery(nuestraGente, arrGalerias, btnNuestraGente, arrBotones);
});

btnPersonas.addEventListener("click", () => {
    showGallery(personas, arrGalerias, btnPersonas, arrBotones);
});

defaultGallery(establecimiento, btnEstablecimiento);