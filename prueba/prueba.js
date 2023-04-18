function enviar() {
    // Obtener los valores ingresados por el usuario
    var nombre = document.getElementById('name').value;
    var numero = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var comentario = document.getElementById('message').value;

    // Validar que se hayan ingresado todos los datos
    if (nombre === '') {
    alert('Por favor ingrese el nombre del cliente');
    return;
    }

    // Construir el mensaje con los datos ingresados
    var mensaje = 'Los datos ingresados son:';
    mensaje += 'Nombre: ' + nombre ;
    mensaje += 'telefono: ' + numero ;
    mensaje += 'email: ' + email ;
    mensaje += 'Comentario: ' + comentario;
/*
    // Mostrar los datos ingresados al lado del botón "Enviar"
    document.getElementById('datos-ingresados').innerHTML = mensaje;

    // Limpiar el formulario
    document.getElementById('nombre').value = '';
    document.getElementById('material').value = 'carton';
    document.getElementById('tamano').value = 'pequena';
    document.getElementById('comentario').value = '';
}
*/

alert(mensaje)}

