document.addEventListener('DOMContentLoaded', function () {
  const botonColor = document.getElementById('boton-color');

  const estadoAlmacenado = localStorage.getItem('estado');
  if (estadoAlmacenado === 'negro') {
    document.body.style.backgroundColor = '#000000';
  } else {
    document.body.style.backgroundColor = '#ffffff';
  }

  botonColor.addEventListener('click', function () {
    const nuevoEstado = changeColor();
    localStorage.setItem('estado', nuevoEstado);
    document.body.style.backgroundColor = nuevoEstado === 'negro' ? '#000000' : '#ffffff';

  });

  function changeColor() {
    const estadoActual = localStorage.getItem('estado');
    return estadoActual === 'negro' ? 'blanco' : 'negro';
  }
});



