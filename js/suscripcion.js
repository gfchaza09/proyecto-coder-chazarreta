const newsletterEmail = document.getElementById('newsletterEmail');
    
const formNewsletter = document.getElementById('formNewsletter');
    
const suscripciones = JSON.parse(localStorage.getItem('newsletterEmail'));

formNewsletter.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const found = suscripciones?.find(suscripcion => suscripcion === newsletterEmail.value);

    if (found) {
        Swal.fire({
            title: '¡Error!',
            text: `Ya existe una suscripción con ese email('${found}').`,
            icon: 'error',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#ffc107',
            timer: 5000,
            timerProgressBar: true
        });
        return;
    }

    if(!suscripciones) {
        const newArrayNewsletter = [newsletterEmail.value];
        localStorage.setItem('newsletterEmail',JSON.stringify(newArrayNewsletter));
    } else {
        suscripciones.push(newsletterEmail.value);
        localStorage.setItem('newsletterEmail',JSON.stringify(suscripciones));
    }
    
    Swal.fire({
        title: '¡Muy Bien!',
        text: `Te suscribiste con el email: ${newsletterEmail.value}. Pronto conocerás más novedades.`,
        icon: 'success',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#ffc107',
        timer: 5000,
        timerProgressBar: true
    }).then(res => {
        location.reload();
    })
})