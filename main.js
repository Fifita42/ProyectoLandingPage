$(document).ready(function(){
    const wrapper = '.wrapper';
    const btnPopup = '.btnLogin-popup';
    const iconClose = '.icon-close';
    const contenido = '.contenido';
    const contacto = '.llamar';

    //usuarios precargados para la pagina
    let usuarios = {
        correo: ['juan@gmail.com','jose@gmail.com'],
        contra : ['1234','1234'],
        uss:['juan','jose']
    }
   
    //al hacer click en el formulario de login activa esta seccion para verificar los datos y loguearse
    $('.login').submit((event)=> {
        event.preventDefault();
        let mai = document.querySelector('.Lemail').value;
        let pas = document.querySelector('.Lpass').value;
        if(validar(mai,pas)){
            $('.icon-pdf').css('visibility','visible');
            console.log("hola");
        }
    });

    //esta funcion comprueba que los datos ingresados coincidan con los datos de la base
    function validar(usu,contra){
        for(let elementos in usuarios.correo){
            if(usuarios.correo[elementos]===usu&&contra===usuarios.contra[elementos]){
                return true;
            }
        }
    }

    //al hacer click en el formulario de registro esta seccion carga un nuevo usuario
    $('.register').submit((event)=> {
        event.preventDefault();
        usuarios.correo.push(document.querySelector('.Ncorreo').value);
        usuarios.contra.push(document.querySelector('.Npass').value);
        usuarios.uss.push(document.querySelector('.NUsuario').value);
        $(wrapper).toggleClass('active');
    });

    //boton de registrar o login, es para mostrar uno de los dos formularios
    $('.login-register p span').click(()=> {
        $(wrapper).toggleClass('active');
    });

    //mostrar los formularios
    $(btnPopup).click(()=> {
        $(wrapper).addClass('active-popup');
        $(wrapper).removeClass('active contacto resumen');
        $(contenido).addClass('active');
    });
    
    //cerrar los formularios
    $(iconClose).click(()=> {
        $(wrapper).removeClass('active-popup active contacto resumen');
        $(contenido).removeClass('active contacto');
        $('input').val(null);
        $('textarea').val(null);
    });

    //mostrar el area de contacto
    $(contacto).click(()=> {
        $(wrapper).addClass('active-popup');
        $(wrapper).addClass('contacto');
        $(wrapper).removeClass('active resumen');
        $(contenido).addClass('active');
    });


    //alargar el alto del textarea del formulario de contacto automaticamente
    var textarea = document.getElementById("message");
    textarea.addEventListener("input", function() {
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
    });

    //verificar los datos ingresados en el formulario de contacto
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
            //agregar los datos del contacto al formulario de resumen
            document.getElementById('nameR').innerHTML = name;
            document.getElementById('phoneR').innerHTML = phone;
            document.getElementById('emailR').innerHTML = email;
            let textareaR = document.getElementById("messageR");
            textareaR.style.height = textarea.style.height;
            document.getElementById('messageR').value = message;
            $(wrapper).addClass('resumen');
        }
        
        $('.resumeEnviar').click((name,phone,email,message)=>{
            //"enviar" los datos a la "base de datos"
            let data = [document.getElementById('nameR').innerHTML,document.getElementById('phoneR').innerHTML,document.getElementById('emailR').innerHTML,document.getElementById('messageR').value];
            console.log(data);
     });
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