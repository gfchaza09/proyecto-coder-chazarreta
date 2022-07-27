"use strict";

const generateGallery = (arrGallery, container) => {
    for (const galeria of arrGallery) {

        let galeriaImg = `<h2 class="mobile__title">${galeria.nombre}</h2>`;

        for (const {id, imgUrl} of galeria.img) {
            if (`${galeria.id}1` === id) {
                galeriaImg += `<div class="carousel-item active">
                                    <img class="d-flex w-100 card-img" src=${imgUrl} alt=${id} class="d-block w-100" />
                                </div>`
                            ;
            } else {
                galeriaImg += `<div class="carousel-item">
                                    <img class="d-flex w-100 card-img" src=${imgUrl} alt=${id} class="d-block w-100" />
                                </div>`
                            ;
            }
        };

        let gallery = `
            <div id=${galeria.id} class="carousel slide gallery__photo" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#${galeria.id}" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#${galeria.id}" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#${galeria.id}" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#${galeria.id}" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner gallery__container">
                    ${galeriaImg}
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#${galeria.id}" data-bs-slide="prev">
                    <span aria-hidden="true"><i class="fas fa-arrow-left"></i></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#${galeria.id}" data-bs-slide="next">
                    <span aria-hidden="true"><i class="fas fa-arrow-right"></i></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        `;
        container.innerHTML += gallery;
    }
}

const defaultGallery = (gallery, btn) => {
  gallery.classList.add("gallery-active");
  btn.classList.add("list__item--active");
};

const showGallery = (gallery, arrGallery, btn, arrBtn) => {
  gallery.classList.add("gallery-active");
  btn.classList.add("list__item--active");

  for (const nodeGallery of arrGallery) {
    nodeGallery !== gallery && nodeGallery.classList.remove("gallery-active");
  }

  for (const button of arrBtn) {
    button !== btn && button.classList.remove("list__item--active");
  }
};

const galerias = [
  { nombre: "Establecimiento", id: "establecimiento", img: [
    {id: "establecimiento1", imgUrl:"https://images.unsplash.com/photo-1569230516306-5a8cb5586399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzM2NDd8MHwxfHNlYXJjaHwzfHxwaXp6ZXJpYXxlbnwwfHx8fDE2NDkyNzEyMzg&ixlib=rb-1.2.1&q=80&w=1080"},
    {id: "establecimiento2", imgUrl:"https://images.unsplash.com/photo-1593548615309-5a45c504f994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzM2NDd8MHwxfHNlYXJjaHw5fHxwaXp6ZXJpYXxlbnwwfHx8fDE2NDkyNzEyMzg&ixlib=rb-1.2.1&q=80&w=1080"},
    {id: "establecimiento3", imgUrl:"https://images.unsplash.com/photo-1617655699589-64375e5ad9a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzM2NDd8MHwxfHNlYXJjaHw4fHxwaXp6ZXJpYXxlbnwwfHx8fDE2NDkyNzEyMzg&ixlib=rb-1.2.1&q=80&w=1080"},
    {id: "establecimiento4", imgUrl:"https://images.unsplash.com/photo-1564936281659-ba4f75a41956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzM2NDd8MHwxfHNlYXJjaHwyfHxwaXp6ZXJpYXxlbnwwfHx8fDE2NDkyNzEyMzg&ixlib=rb-1.2.1&q=80&w=1080"}
  ]},
  { nombre: "Pizza y Varios", id: "pizzaVarios", img: [
    {id: "pizzaVarios1", imgUrl:"https://images.unsplash.com/photo-1594007654729-407eedc4be65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzM2NDd8MHwxfHNlYXJjaHwzfHxwaXp6YXxlbnwwfHx8fDE2NTA4MzAwNzU&ixlib=rb-1.2.1&q=80&w=1080"},
    {id: "pizzaVarios2", imgUrl:"https://images.unsplash.com/photo-1590947132387-155cc02f3212?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzM2NDd8MHwxfHNlYXJjaHw1fHxwaXp6YXxlbnwwfHx8fDE2NTA4MzAwNzU&ixlib=rb-1.2.1&q=80&w=1080"},
    {id: "pizzaVarios3", imgUrl:"https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzM2NDd8MHwxfHNlYXJjaHwxMHx8cGl6emF8ZW58MHx8fHwxNjUwODMwMDc1&ixlib=rb-1.2.1&q=80&w=1080"},
    {id: "pizzaVarios4", imgUrl:"https://images.unsplash.com/photo-1571066811602-716837d681de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzM2NDd8MHwxfHNlYXJjaHw0fHxwaXp6YXxlbnwwfHx8fDE2NTA4MzAwNzU&ixlib=rb-1.2.1&q=80&w=1080"}
  ]},
  { nombre: "Nuestra Gente", id: "nuestraGente", img: [
    {id: "nuestraGente1", imgUrl:"https://images.unsplash.com/photo-1558138838-76294be30005?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzM2NDd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMGNoZWZ8ZW58MHx8fHwxNjUwODMwNTE4&ixlib=rb-1.2.1&q=80&w=1080"},
    {id: "nuestraGente2", imgUrl:"https://images.unsplash.com/photo-1542834291-c514e77b215f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzM2NDd8MHwxfHNlYXJjaHw0fHxwaXp6YSUyMGNoZWZ8ZW58MHx8fHwxNjUwODMwNTE4&ixlib=rb-1.2.1&q=80&w=1080"},
    {id: "nuestraGente3", imgUrl:"https://images.unsplash.com/photo-1551888797-e7d1f43d28c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzM2NDd8MHwxfHNlYXJjaHw1fHxwaXp6YSUyMGNoZWZ8ZW58MHx8fHwxNjUwODMwNTE4&ixlib=rb-1.2.1&q=80&w=1080"},
    {id: "nuestraGente4", imgUrl:"https://images.unsplash.com/photo-1593098656835-3276920d948c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzM2NDd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMHdhaXRlcnxlbnwwfHx8fDE2NTA4MzA2MDk&ixlib=rb-1.2.1&q=80&w=1080"}
  ]},
  { nombre: "Personas y Personajes", id: "personas", img: [
    {id: "personas1", imgUrl:"https://images.unsplash.com/photo-1592861956120-e524fc739696?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzM2NDd8MHwxfHNlYXJjaHwyfHxwaXp6YSUyMHBlb3BsZXxlbnwwfHx8fDE2NTA4MzA0NTk&ixlib=rb-1.2.1&q=80&w=1080"},
    {id: "personas2", imgUrl:"https://images.unsplash.com/photo-1533777419517-3e4017e2e15a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzM2NDd8MHwxfHNlYXJjaHwxMHx8cGl6emElMjBwZW9wbGV8ZW58MHx8fHwxNjUwODMwNDU5&ixlib=rb-1.2.1&q=80&w=1080"},
    {id: "personas3", imgUrl:"https://images.unsplash.com/photo-1606787503890-e23f7f79b299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzM2NDd8MHwxfHNlYXJjaHw2fHxwaXp6YSUyMHBlb3BsZXxlbnwwfHx8fDE2NTA4MzA0NTk&ixlib=rb-1.2.1&q=80&w=1080"},
    {id: "personas4", imgUrl:"https://images.unsplash.com/photo-1592417817038-d13fd7342605?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzM2NDd8MHwxfHNlYXJjaHw1fHxwaXp6YSUyMHBlb3BsZXxlbnwwfHx8fDE2NTA4MzA0NTk&ixlib=rb-1.2.1&q=80&w=1080"}
  ]},
];

const galleryContainer = document.getElementById("galleryContainer");

generateGallery(galerias,galleryContainer);

const btnEstablecimiento = document.getElementById("btnEstablecimiento");
const btnPizzaVarios = document.getElementById("btnPizzaVarios");
const btnNuestraGente = document.getElementById("btnNuestraGente");
const btnPersonas = document.getElementById("btnPersonas");

const establecimiento = document.getElementById("establecimiento");
const pizzaVarios = document.getElementById("pizzaVarios");
const nuestraGente = document.getElementById("nuestraGente");
const personas = document.getElementById("personas");

// Array de botones
const arrBotones = [
  btnEstablecimiento,
  btnPizzaVarios,
  btnNuestraGente,
  btnPersonas,
];

// Array de nodos de galerías
const arrNodoGalerias = [establecimiento, pizzaVarios, nuestraGente, personas];

btnEstablecimiento.addEventListener("click", () => {
  showGallery(establecimiento, arrNodoGalerias, btnEstablecimiento, arrBotones);
});

btnPizzaVarios.addEventListener("click", () => {
  showGallery(pizzaVarios, arrNodoGalerias, btnPizzaVarios, arrBotones);
});

btnNuestraGente.addEventListener("click", () => {
  showGallery(nuestraGente, arrNodoGalerias, btnNuestraGente, arrBotones);
});

btnPersonas.addEventListener("click", () => {
  showGallery(personas, arrNodoGalerias, btnPersonas, arrBotones);
});

defaultGallery(establecimiento, btnEstablecimiento);
