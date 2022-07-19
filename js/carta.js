"use strict";

const generateCards = (arrObjetos, container) => {
    for (const objeto of arrObjetos) {
        let card = `
            <div class="col-auto col-md-6 col-lg-4" >
                <div class="card mb-3 mt-3 section__card">
                    <img src=${objeto.img} alt="${objeto.id}-carta" class="card-img-top" />
                    <div class="card-body card__text--food">
                        <h4>${objeto.titulo}</h4>
                        ${objeto.parrafo ? `<p>${objeto.parrafo}</p>` : ""}
                        <span>Precio: ${objeto.precio}$</span>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    }
}

const pizzas = [
    {id: 1, titulo: "Muzzarella", parrafo: "Muzzarella, aceitunas y orégano", precio: 620, img:"../images/muzzarella.jpg"},
    {id: 2, titulo: "Jamón y Morrón", parrafo: "Muzzarella, jamón, morrones, aceitunas y orégano", precio: 720, img:"../images/jamonymorron.jpg"},
    {id: 3, titulo: "Napolitana", parrafo: "Muzzarella, rodajas de tomate y orégano", precio: 720, img:"../images/napolitana.jpg"},
];

const empanadas = [
    {id: 101, titulo: "Carne", precio: 80, img:"../images/empanada_carne.jpg"},
    {id: 102, titulo: "Jamón y Queso", precio: 80, img:"../images/empanada_jamonyqueso.jpg"},
    {id: 103, titulo: "Atún", precio: 80, img:"../images/empanada_atun.jpg"},
];

const bebidas = [
    {id: 201, titulo: "Agua", parrafo: "Marca: Nestlé", precio: 150, img:"../images/agua.jpg"},
    {id: 202, titulo: "Gaseosa", parrafo: "Marca: Pepsi", precio: 300, img:"../images/gaseosa.jpg"},
    {id: 203, titulo: "Cerveza", parrafo: "Marca: Brahma", precio: 350, img:"../images/cerveza.jpg"},
];

const postres = [
    {id: 301, titulo: "Bombones", precio: 80, img:"../images/bombones.jpg"},
    {id: 302, titulo: "Almendrado", precio: 140, img:"../images/almendrado.jpg"},
    {id: 303, titulo: "Helado", precio: 100, img:"../images/helado.jpg"},
];

const cardsPizzas = document.getElementById("pizzas");
const cardsEmpanadas = document.getElementById("empanadas");
const cardsBebidas = document.getElementById("bebidas");
const cardsPostres = document.getElementById("postres");

generateCards(pizzas, cardsPizzas);
generateCards(empanadas, cardsEmpanadas);
generateCards(bebidas, cardsBebidas);
generateCards(postres, cardsPostres);