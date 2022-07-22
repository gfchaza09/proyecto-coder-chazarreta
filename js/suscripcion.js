const newsletterEmail = document.getElementById('newsletterEmail');
    
const formNewsletter = document.getElementById('formNewsletter');
    
const suscripciones = JSON.parse(localStorage.getItem('newsletterEmail'));

formNewsletter.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const found = suscripciones.find(suscripcion => suscripcion === newsletterEmail.value);

    if (found) {
        alert("Ya existe una suscripción con ese email");
        return;
    }

    if(!suscripciones) {
        const newArrayNewsletter = [newsletterEmail.value];
        localStorage.setItem('newsletterEmail',JSON.stringify(newArrayNewsletter));
    } else {
        suscripciones.push(newsletterEmail.value);
        localStorage.setItem('newsletterEmail',JSON.stringify(suscripciones));
    }
    
    alert(`Email suscrito: ${newsletterEmail.value}`);
    location.reload();
})