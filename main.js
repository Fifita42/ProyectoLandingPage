$(document).ready(function(){
    const wrapper = '.wrapper';
    const btnPopup = '.btnLogin-popup';
    const iconClose = '.icon-close';
    const contenido = '.contenido';
    const contacto = '.llamar';

    let usuarios = {
        correo: ['juan@gmail.com','jose@gmail.com'],
        contra : ['1234','1234'],
        uss:['juan','jose']
    }
   
    $('.login').submit((event)=> {
        event.preventDefault();
        let mai = document.querySelector('.Lemail').value;
        let pas = document.querySelector('.Lpass').value;
        if(validar(mai,pas)){
            $('.icon-pdf').css('visibility','visible');
            console.log("hola");
        }
    });

function validar(usu,contra){
    for(let elementos in usuarios.correo){
        if(usuarios.correo[elementos]===usu&&contra===usuarios.contra[elementos]){
            return true;
        }
    }
}

    $('.register').submit((event)=> {
        event.preventDefault();
        usuarios.correo.push(document.querySelector('.Ncorreo').value);
        usuarios.contra.push(document.querySelector('.Npass').value);
        usuarios.uss.push(document.querySelector('.NUsuario').value);
        $(wrapper).toggleClass('active');
    });

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

        if(name === ''){
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
        else
        {
            document.getElementById('nameR').innerHTML = name;
            document.getElementById('phoneR').innerHTML = phone;
            document.getElementById('emailR').innerHTML = email;
            let textareaR = document.getElementById("messageR");
            textareaR.style.height = textarea.style.height;
            document.getElementById('messageR').value = message;
            $(wrapper).addClass('resumen');

        }
        function isValidPhone(phone) {
            const re = /^\d{10}$/;
            return re.test(phone);
       }
    });

    //imprimir
    const boton = '.icon-pdf';
    let direccionImpresion = ($(window).width()>1215)?"landscape":"portrait";
    $(boton).click(()=>{
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
        .catch(err=>console.log(err))
        .finally()
        .then(()=>{
            $("main").removeClass("imprimir");
            $(".contenido").removeClass("ocultar");
        });
    });
});