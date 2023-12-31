document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.requires-validation');

  form.addEventListener('submit', function(event) {
      const nombre = document.getElementById('nombre').value;
      const apellido = document.getElementById('apellido').value;
      const telefono = parseInt(document.getElementById('telefono').value);
      const carrera = document.getElementById('carrera').value;
      const edad = parseInt(document.getElementById('edad').value);
      const mensaje = document.getElementById('floatingTextarea').value;

      let isValid = true;

      if (!/^[a-zA-Z\s]+$/.test(nombre)) { //Invalida el campo si es distinto a a-zA-Z
          isValid = false;
          setInvalidField('nombre');
          //alert('El Nombre es invalido.');
          console.log('No permita enviar solamente un numero y el campo vacio.')
      } else {
          setValidField('nombre');
      }

      if (!/^[a-zA-Z\s]+$/.test(apellido)) { //Invalida el campo si es distinto a a-zA-Z
          isValid = false;
          setInvalidField('apellido');
          //alert('El Apellido es invalido.');
          console.log('No permita enviar solamente un numero y el campo vacio.')
      } else {
          setValidField('apellido');
      }

      if (isNaN(telefono) || telefono < 222222222 || telefono > 999999999) { //Invalida el campo si no es un numero o si es menor a 22... o mayor a 99...
          isValid = false;
          setInvalidField('telefono');
          //alert('El Telefono es invalido.');
          console.log('Solo permite enviar un valor numerico y que sea mayor a 222222222 y menor que 999999999.')
      } else {
        setValidField('telefono');
      }

      if (!/^[a-zA-Z\s]+$/.test(carrera)) { //Invalida el campo si es distinto a a-zA-Z
          isValid = false;
          setInvalidField('carrera');
          //alert('La Carrera es invalida.');
          console.log('No permita enviar solamente un numero y el campo vacio.')
      } else {
        setValidField('carrera');
      }

      if (isNaN(edad) || edad < 17 || edad > 60) { //Invalida el campo si no es un numero o es menor a 17 o mayor a 60
          isValid = false;
          setInvalidField('edad');
          //alert('La Edad es invalida.');
          console.log('Solo permite enviar un valor numerico y que la edad sea desde los 17 años hasta los 60 años.')
      } else {
          setValidField('edad');
      }

      if (mensaje.trim() === '' || /^\d+$/.test(mensaje)) { //Invalida el campo si el campo se encuentra vacio o no contiene ningun caracter de a-zA-Z o numero
          isValid = false;
          setInvalidField('floatingTextarea');
          //alert('El Mensaje es invalido.');
          console.log('No permita enviar solamente un numero y el campo vacio')
      } else {
          setValidField('floatingTextarea');
      }

      if (!isValid) {
          event.preventDefault(); // No envia el formulario si este contiene errores
          alert('Mensaje no enviado. Revisa los datos ingresados.')
      } else {
          alert('Datos enviados correctamente')
      }
  });
});

function setValidField(fieldName) { //Funcion que establece el campo como valido junto a un mensaje en el "valid-feedback"
  const field = document.getElementById(fieldName);
  field.classList.remove('is-invalid');
  field.classList.add('is-valid');
}

function setInvalidField(fieldName) { //Funcion que establece el campo como invalido junto a un mensaje en el "invalid-feedback"
  const field = document.getElementById(fieldName);
  field.classList.remove('is-valid');
  field.classList.add('is-invalid');
}

/*
(function () {
  'use strict'
  const forms = document.querySelectorAll('.requires-validation')
  Array.from(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
  */