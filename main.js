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
