
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelectorAll('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close')
const contenido = document.querySelector('.contenido');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.forEach(boton=>{
    boton.addEventListener('click', ()=> {
        wrapper.classList.add('active-popup');
        contenido.classList.add('active');
    });
}),


iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
    contenido.classList.remove('active');

    const inputs = document.querySelectorAll('input');
    inputs.forEach(inp=>{
        inp.value = null;
    });

});
/*

const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.querySelector("input[type=email]").value;
    const password = document.querySelector("input[type=password]").value;

    if (email.trim() === "") {
        alert("Por favor ingrese su correo electrónico");
        return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Por favor ingrese un correo electrónico válido");
        return;
    }

    if (password.trim() === "") {
        alert("Por favor ingrese su contraseña");
        return;
    }

    alert("El formulario se envió correctamente");
    formulario.reset();
}); */
