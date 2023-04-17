$(document).ready(function(){
    const wrapper = '.wrapper';
    const btnPopup = '.btnLogin-popup';
    const iconClose = '.icon-close';
    const contenido = '.contenido';
    const contacto = '.llamar';

    $('.login-register p span').click(()=> {
        $(wrapper).toggleClass('active');
    });

    $(btnPopup).click(()=> {
        $(wrapper).toggleClass('active-popup');
        $(wrapper).removeClass('active');
        $(contenido).toggleClass('active');
    });
    
    $(iconClose).click(()=> {
        $(wrapper).removeClass('active-popup active contacto resumen');
        $(contenido).removeClass('active contacto');
        $('input').val(null);
    });

    $(contacto).click(()=> {
        $(wrapper).addClass('active-popup');
        $(wrapper).toggleClass('contacto');
        $(wrapper).removeClass('active resumen');
        $(contenido).addClass('active');
    });

    var textarea = document.getElementById("message");
    textarea.addEventListener("input", function() {
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
    });

    $('.btnContacto').click(()=>{
        const phone =  document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();

        if (phone === '') {
            alert('Por favor, ingrese su teléfono');
            document.getElementById('phone').focus();
            return;
        } else if (!isValidPhone(phone)) {
            alert('Por favor, ingrese un número de teléfono válido');
            document.getElementById('phone').focus();
            return;
        }
        else if (message === '') {
            alert('Por favor, ingrese su mensaje');
            document.getElementById('message').focus();
            return;
        }
        else
        {
            console.log('Datos ingresados:');
            console.log(`Nombre: ${name}`);
            console.log(`Teléfono: ${phone}`);
            console.log(`Email: ${email}`);
            console.log(`Mensaje: ${message}`);

            document.getElementById('phoneR').value = phone;
            document.getElementById('messageR').value = message;
            document.getElementById('nameR').value = name;
            document.getElementById('emailR').value = email;

            $(wrapper).addClass('resumen');

        }
        function isValidPhone(phone) {
            const re = /^\d{10}$/;
            return re.test(phone);
       }
    });

});