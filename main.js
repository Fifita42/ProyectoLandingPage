$(document).ready(function(){
    const wrapper = document.querySelector('.wrapper');
    const btnPopup = document.querySelectorAll('.btnLogin-popup');
    const iconClose = document.querySelector('.icon-close')
    const contenido = document.querySelector('.contenido');
    
    
    $('.login-register p a').click(()=> {
        $(wrapper).toggleClass('active');
    });

    $(btnPopup).click(()=> {
        $(wrapper).toggleClass('active-popup');
        $(contenido).toggleClass('active');
    });
    
    $(iconClose).click(()=> {
        $(wrapper).removeClass('active-popup');
        $(contenido).removeClass('active');
        $('input').val(null);
    
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
    
});

