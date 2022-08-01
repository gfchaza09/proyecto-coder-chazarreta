"use strcit";

// Función de validación de los campos del formulario
const validateInput = (input) => {
  switch (input) {
    case nombre:
      if(input.value.trim().length > 6) {
        return false;
      }
      return "El nombre es demasiado corto. Se admiten más de 6 caracteres."
    case telefono:
      if (regExpTelefono.test(input.value)) {
        return false;
      }
      return "El teléfono es inválido. Sólo se admiten números telefónicos de Argentina.";
    case email:
      if (regExpEmail.test(input.value)) {
        return false;
      }
      return "El email es inválido.";
    case mensaje:
      if(input.value.trim().length > 20) {
        return false;
      }
      return "El mensaje será válido a partir de los 20 caracteres."
  }
}

// Función para mostrar errores en el formulario
const showError = (validate, input) => {
  let message = document.createElement("span");
  message.textContent = !validate ? "" : validate;
  message.classList.add("message__error");
  if(!validate) {
    input.classList.remove("input__error");
    if(input.parentElement.lastElementChild.className === "message__error") {
      input.parentElement.lastElementChild.textContent = "";
    }
  } else {
    input.classList.add("input__error");
    if(input.parentElement.lastElementChild.className === "message__error") {
      input.parentElement.lastElementChild.textContent = validate;
      return;
    }
    input.parentElement.append(message);
  }
}

// Función para vaciar los input cuando se envía exitosamente el mensaje
const clearInput = () => {
  inputNombre.value = '';
  inputTelefono.value = '';
  inputEmail.value = '';
  inputMensaje.value = '';
  checkboxSub.checked = false;
}

// Expresiones regulares

// Luego del . se debe usar más de un caracter
// Un email no puede iniciar con .
// Se admiten caracteres, dígitos, guiones bajos y guiones
// No se admiten puntos dobles ..
const regExpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// Para la validación del número sólo estamos admitiendo números válidos en Argentina
const regExpTelefono = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;

// Campos del formulario
const inputNombre = document.getElementById("nombre");
const inputTelefono = document.getElementById("telefono");
const inputEmail = document.getElementById("email");
const inputMensaje = document.getElementById("mensaje");
const checkboxSub = document.getElementById("suscribe");

const form = document.getElementById("formulario");

// Objeto que contiene los valores del formulario
const objFormulario = {
  nombre: "",
  telefono: "",
  email: "",
  mensaje: "",
  suscripcion: false,
}

form.addEventListener("submit", e => {
  e.preventDefault();
  if (!validateInput(inputNombre) && !validateInput(inputEmail) && !validateInput(inputTelefono) && !validateInput(inputMensaje)) {
    objFormulario.nombre = inputNombre.value;
    objFormulario.telefono = inputTelefono.value;
    objFormulario.email = inputEmail.value;
    objFormulario.mensaje = inputMensaje.value;
    objFormulario.suscripcion = checkboxSub.checked;
    console.log(objFormulario);
    Toastify({
      text: 'Muchas gracias por tu mensaje',
      duration: 3000,
      close: true,
      gravity: 'top',
      position: 'right',
      style: {
        background: '#d1e7dd',
        color: '#0f5132'
      }
    }).showToast();

    showError(validateInput(inputNombre), inputNombre);
    showError(validateInput(inputEmail), inputEmail);
    showError(validateInput(inputTelefono), inputTelefono);
    showError(validateInput(inputMensaje), inputMensaje);

    clearInput();
    
  } else {
    showError(validateInput(inputNombre), inputNombre);
    showError(validateInput(inputEmail), inputEmail);
    showError(validateInput(inputTelefono), inputTelefono);
    showError(validateInput(inputMensaje), inputMensaje);
  }
});