$(document).ready(function(){
    const wrapper = document.querySelector('.wrapper');
    const btnPopup = document.querySelectorAll('.btnLogin-popup');
    const iconClose = document.querySelector('.icon-close')
    const contenido = document.querySelector('.contenido');
    
    
    $('.login-register p span').click(()=> {
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
});