"use strict";

const generateCards = (arrObjetos, container) => {
    for (const { img, id, titulo, parrafo, precio} of arrObjetos) {
        let card = `
            <div class="col-auto col-md-6 col-lg-4" >
                <div class="card mb-3 mt-3 section__card">
                    <img src=${img} alt="${id}-carta" class="card-img-top" />
                    <div class="card-body card__text--food">
                        <h4>${titulo}</h4>
                        ${parrafo ? `<p>${parrafo}</p>` : ""}
                        <span>Precio: ${precio}$</span>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    }
}

// Se reemplazaron por el simulador de API mocki
// const pizzas = [
//     {id: 1, titulo: "Muzzarella", parrafo: "Muzzarella, aceitunas y orégano", precio: 620, img:"../images/muzzarella.jpg"},
//     {id: 2, titulo: "Jamón y Morrón", parrafo: "Muzzarella, jamón, morrones, aceitunas y orégano", precio: 720, img:"../images/jamonymorron.jpg"},
//     {id: 3, titulo: "Napolitana", parrafo: "Muzzarella, rodajas de tomate y orégano", precio: 720, img:"../images/napolitana.jpg"},
// ];

// const empanadas = [
//     {id: 101, titulo: "Carne", precio: 80, img:"../images/empanada_carne.jpg"},
//     {id: 102, titulo: "Jamón y Queso", precio: 80, img:"../images/empanada_jamonyqueso.jpg"},
//     {id: 103, titulo: "Atún", precio: 80, img:"../images/empanada_atun.jpg"},
// ];

// const bebidas = [
//     {id: 201, titulo: "Agua", parrafo: "Marca: Nestlé", precio: 150, img:"../images/agua.jpg"},
//     {id: 202, titulo: "Gaseosa", parrafo: "Marca: Pepsi", precio: 300, img:"../images/gaseosa.jpg"},
//     {id: 203, titulo: "Cerveza", parrafo: "Marca: Brahma", precio: 350, img:"../images/cerveza.jpg"},
// ];

// const postres = [
//     {id: 301, titulo: "Bombones", precio: 80, img:"../images/bombones.jpg"},
//     {id: 302, titulo: "Almendrado", precio: 140, img:"../images/almendrado.jpg"},
//     {id: 303, titulo: "Helado", precio: 100, img:"../images/helado.jpg"},
// ];

const cardsPizzas = document.getElementById("pizzas");
const cardsEmpanadas = document.getElementById("empanadas");
const cardsBebidas = document.getElementById("bebidas");
const cardsPostres = document.getElementById("postres");

// generateCards(pizzas, cardsPizzas);

fetch('https://mocki.io/v1/9073e396-ec19-4bff-8ffc-6f36c58af02b')
    .then(res => res.json())
    .then(data => {
        generateCards(data.pizzas, cardsPizzas);
        generateCards(data.empanadas, cardsEmpanadas);
        generateCards(data.bebidas, cardsBebidas);
        generateCards(data.postres, cardsPostres);
    })
    .catch(error => console.log("Ocurrió un error:",error));