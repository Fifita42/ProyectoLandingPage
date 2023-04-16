$(document).ready(function(){
    const wrapper = '.wrapper';
    const btnPopup = '.btnLogin-popup';
    const iconClose = '.icon-close';
    const contenido = '.contenido';
    
    $('.login-register p span').click(()=> {
        $(wrapper).toggleClass('active');
    });

    $(btnPopup).click(()=> {
        $(wrapper).toggleClass('active-popup');
        $(wrapper).removeClass('active');
        $(contenido).toggleClass('active');
        $('.inicio').toggleClass('active');
    });
    
    $(iconClose).click(()=> {
        $(wrapper).removeClass('active-popup');
        $(wrapper).removeClass('active');
        $(contenido).removeClass('active');
        $('.inicio').removeClass('active');
        $('input').val(null);
    });
});