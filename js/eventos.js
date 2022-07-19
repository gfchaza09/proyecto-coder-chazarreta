"use strict";

const generateArticles = () => {

    for (const evento of eventos) {

        let textoModal = "";

        for (const texto of evento.modal) {
            textoModal += `<p>${texto.texto}</p>`;
        };

        let article = `
        <article class="article">
            <div class="article__header">
                <h3>${evento.titulo}</h3>
                <span>${evento.fecha}</span>  
            </div>
            <div class="article__content">
                <img src=${evento.img} alt=${evento.altImg} />
                <div class="article__content--text">
                    <p>${evento.descripcion}</p>
                    
                    <button type="button" class="btn__read text-white" data-bs-toggle="modal" data-bs-target="#${evento.id}"> 
                    Leer más...
                    </button>
                    
                    <div class="modal fade" id=${evento.id} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-scrollable">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="staticBackdropLabel">${evento.titulo}</h5>
                                    <button type="button" class="btn-close btn-danger" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    ${textoModal}
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
        `;
        containerEventos.innerHTML += article;
    };
};

const eventos = [
  {
    id: "event1",
    titulo: "Presentación carta primavera-verano",
    fecha: "02/09",
    img: "https://images.unsplash.com/photo-1600628421060-939639517883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzM2NDd8MHwxfHNlYXJjaHwyfHxwaXp6YSUyMHBhcnR5fGVufDB8fHx8MTY0OTI3NDYwMA&ixlib=rb-1.2.1&q=80&w=1080",
    altImg: "presentacion-carta",
    descripcion: 'La primer semana de septiembre inicia con la presentación de nuestra nueva carta "adapatada a las tendenicas mundiales" que incluye pizzas sin TACC, con harinas orgánicas y nuevos platos.',
    modal: [
        {texto: "Parte de la oferta gastronómica incluye pizzas sin TACC (de proovedor certificado), empanadas y opciones pensadas para compartir: tablas de fiambres, entradas deliciosas y pizzas rellenas.", id: 1},
        {texto: "Pero no solo eso: esta carta trae como novedad la incorporación de nuevos platos y variedades de pizzas, enalteciendo el producto de la mano de productores locales. Se incorporó harina 100% integral orgánica certificada y la posibilidad de que el comensal pueda pedir cualquier pizza con esa versión.", id: 2},
        {texto: "Como innovación, se incorpora el Khachapuri, un producto novedoso, una especie de pan relleno de mozzarella y otros agregados, para compartir y untar los bordes entre varios comensales.", id: 3}
    ],
  },
  {
    id: "event2",
    titulo: "Día de la primavera",
    fecha: "21/09",
    img: "https://images.unsplash.com/photo-1533777419517-3e4017e2e15a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzM2NDd8MHwxfHNlYXJjaHwxMHx8cGl6emElMjBwYXJ0eXxlbnwwfHx8fDE2NDkyNzQ2MDA&ixlib=rb-1.2.1&q=80&w=1080",
    altImg: "primavera-pizza",
    descripcion: 'Vení con toda la familia a disfrutar de nuestra comida en este día especial que contará con descuentos, sorteos y más sorpresas.',
    modal: [
        {texto: "En el evento gastronómico que se llevara a cabo este 21 de septiembre habrá descuentos de hasta un 30% y promociones para los fanáticos de la muzarella.", id:101},
        {texto: "La iniciativa tiene como objetivo celebrar la llegada del día de la primavera y que mejor, que degustar unas sabrosas pizzas.", id:102},
        {texto: "Acercate a nuestros locales, a partir de este mes contamos con libre circulación y 100% de aforo en el interior de nuestros locales. ¿Te lo vas a perder?", id:103}
    ],
  },
  {
    id: "event3",
    titulo: "Noche de la Pizza y la Empanada",
    fecha: "28/09",
    img: "https://images.unsplash.com/photo-1564936281659-ba4f75a41956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzM2NDd8MHwxfHNlYXJjaHwyfHxwaXp6ZXJpYXxlbnwwfHx8fDE2NDkyNzEyMzg&ixlib=rb-1.2.1&q=80&w=1080",
    altImg: "noche-de-pizza",
    descripcion: 'El martes 28 de septiembre se celebra la edición de La Noche de la Pizza y La Empanada en todo el territorio argentino, un evento único que tiene como objetivo dar impulso al consumo en el sector, con importantes descuentos en salón, mesas al aire libre, take away y delivery de los comercios adheridos y una propuesta digital con cocineros invitados.',
    modal: [
        {texto: "Habrá para todos los gustos: opciones para delivery, take away y, por supuesto, para comer en los locales y disfrutar de una experiencia gastronómica completa, con promociones e importantes descuentos en todas las modalidades.", id: 201},
        {texto: "Habrá sorteos, descuentos del 50% en los precios de la carta, y en todos los locales, los beneficios se mantendrán incluso hasta el domingo.", id:202},
        {texto: "Te esperamos para que puedas disfrutar de las mejores pizzas y empanadas del mundo, ¿qué esperas?", id:203}
    ],
    
  },
];

const containerEventos = document.getElementById("eventos");

generateArticles();