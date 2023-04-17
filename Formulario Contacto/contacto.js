const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (name === '') {
    alert('Por favor, ingrese su nombre');
    nameInput.focus();
    return;
  }

  if (phone === '') {
    alert('Por favor, ingrese su teléfono');
    phoneInput.focus();
    return;
  } else if (!isValidPhone(phone)) {
    alert('Por favor, ingrese un número de teléfono válido');
    phoneInput.focus();
    return;
  }

  if (email === '') {
    alert('Por favor, ingrese su correo electrónico');
    emailInput.focus();
    return;
  } else if (!isValidEmail(email)) {
    alert('Por favor, ingrese un correo electrónico válido');
    emailInput.focus();
    return;
  }

  if (message === '') {
    alert('Por favor, ingrese su mensaje');
    messageInput.focus();
    return;
  }


  form.submit();
});

function isValidEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function isValidPhone(phone) {
  const re = /^\d{10}$/;
  return re.test(phone);
}
