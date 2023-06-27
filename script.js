const cant = document.querySelector('.cant');
const sum = document.querySelector('.increase');
const rest = document.querySelector('.decrease');
const cer = document.querySelector('.reset');

let incremento = 0;

function sumar() {
  incremento++;
  cant.innerHTML = incremento;
  actualizarColor();
}

function restar() {
  incremento--;
  cant.innerHTML = incremento;
  actualizarColor();
}

function cero() {
  incremento = 0;
  cant.innerHTML = incremento;
  actualizarColor();
}

function actualizarColor() {
  cant.classList.remove('rojo', 'verde', 'zero');
  
  if (incremento < 0) {
    cant.classList.add('rojo');
  } else if (incremento === 0) {
    cant.classList.add('zero');
  } else {
    cant.classList.add('verde');
  }
}

function usos() {
  sum.addEventListener('click', () => {
    sumar();
  });

  rest.addEventListener('click', () => {
    restar();
  });

  cer.addEventListener('click', () => {
    cero();
  });

  actualizarColor();
}

usos();