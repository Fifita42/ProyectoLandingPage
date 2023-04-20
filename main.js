$(document).ready(function () {
    const wrapper = '.wrapper';
    const btnPopup = '.btnLogin-popup';
    const iconClose = '.icon-close';
    const contenido = '.contenido';
    const contacto = '.llamar';
    let ID = 1;
    //usuarios precargados para la pagina
    let usuarios = {
        correo: ['juan@gmail.com', 'jose@gmail.com'],
        contra: ['1234', '1234'],
        uss: ['juan', 'jose'],
        id: [0, 1]
    }
    let datos = [];

    $('.login').submit((event) => {
        event.preventDefault();

        let mai = document.querySelector('.Lemail').value;
        let pas = document.querySelector('.Lpass').value;

        if (validar(mai, pas)) $('.icon-pdf').css('visibility', 'visible');
        else alert("El mail o la contraseña son erroneos");

        const enviar = { mai, pas };
        datos.push(enviar);
        console.log(datos);
    });

    function validar(usu, contra) {
        for (let elementos in usuarios.correo) {
            if (usuarios.correo[elementos] === usu && contra === usuarios.contra[elementos]) return true;
        }
        return false
    }

    $('.register').submit((event) => {
        event.preventDefault();

        let Ncorreo = document.querySelector('.Ncorreo').value;
        let Npass = document.querySelector('.Npass').value;
        let NUsuario = document.querySelector('.NUsuario').value;

        usuarios.correo.push(Ncorreo);
        usuarios.contra.push(Npass);
        usuarios.uss.push(NUsuario);
        ID++;
        usuarios.id.push(ID);

        let enviar = [{ Ncorreo, Npass, NUsuario, ID }];
        console.log(enviar);

        $(wrapper).removeClass('active');
    });


    $('.login-register p span').click(() => {
        $(wrapper).toggleClass('active');
    });

    $(btnPopup).click(() => {
        $(wrapper).addClass('active-popup');
        $(wrapper).removeClass('active contacto resumen');
        $(contenido).addClass('active');
    });

    $(iconClose).click(() => {
        $(wrapper).removeClass('active-popup active contacto resumen');
        $(contenido).removeClass('active contacto');
        $('input').val(null);
        $('textarea').val(null);
    });

    $(contacto).click(() => {
        $(wrapper).addClass('active-popup');
        $(wrapper).addClass('contacto');
        $(wrapper).removeClass('active resumen');
        $(contenido).addClass('active');
    });

    var textarea = document.getElementById("message");
    textarea.addEventListener("input", function () {
        this.style.height = "auto";
        this.style.height = this.scrollHeight + "px";
    });

    $('.btnContacto').click(() => {
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();

        if (name === '') {
            alert('Por favor, ingrese un nombre válido');
            document.getElementById('name').focus();
            return;
        }
        else if (phone === '') {
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
        else {
            document.getElementById('nameR').innerHTML = name;
            document.getElementById('phoneR').innerHTML = phone;
            document.getElementById('emailR').innerHTML = email;

            let textareaR = document.getElementById("messageR");
            textareaR.style.height = textarea.style.height;
            textareaR.value = message;

            $(wrapper).addClass('resumen');
        }

        $('.resumeEnviar').click(() => {
            //"enviar" los datos a la "base de datos"
            let data = [document.getElementById('nameR').innerHTML, document.getElementById('phoneR').innerHTML, document.getElementById('emailR').innerHTML, document.getElementById('messageR').value];
            console.log(data);
        });

        function isValidPhone(phone) {
            const re = /^\d{10}$/;
            return re.test(phone);
        }
    });

    //imprimir
    let direccionImpresion = ($(window).width() > 1215) ? "landscape" : "portrait";

    $('.icon-pdf').click(() => {
        $('.contenido').addClass('ocultar');
        $('main').addClass("imprimir");

        const $elementoParaPDF = document.querySelector('main');

        html2pdf()
            .set({
                margin: 1,
                filename: 'ResumenDeContacto.pdf',
                image: {
                    type: 'jpeg',
                    quality: 0.98
                },
                html2canvas: {
                    scale: 3,
                    letterRendering: true,
                },
                jsPDF: {
                    unit: "in",
                    format: "a3",
                    orientation: `${direccionImpresion}`
                }
            })
            .from($elementoParaPDF)
            .save()
            .catch(err => console.log(err))
            .finally()
            .then(() => {
                $("main").removeClass("imprimir");
                $(".contenido").removeClass("ocultar");
            });
    });
});
