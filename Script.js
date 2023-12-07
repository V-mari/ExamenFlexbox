const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});

//Buscador
document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que se envíe el formulario
  var busqueda = document.getElementById("busqueda").value;
  // Aquí puedes realizar la acción de búsqueda con el valor ingresado
  console.log("Búsqueda: " + busqueda);
});

//imagenes en carrusel

let index = 0;
const carruselItems = document.querySelectorAll('.carrusel-item');

function cambiarImagen() {
  index = (index + 1) % carruselItems.length;
  const desplazamiento = -index * 100 + '%';
  document.querySelector('.carrusel').style.transform = `translateX(${desplazamiento})`;
}

setInterval(cambiarImagen, 3000); // Cambia la imagen cada 3 segundos


//contador
const contador = document.getElementById('contador');
const boton = document.getElementById('boton');
const resetear = document.getElementById('resetear');

let contadorClicks = 0;

boton.addEventListener('click', () => {
  contadorClicks++;
  contador.textContent = contadorClicks;
});

resetear.addEventListener('click', () => {
  contadorClicks = 0;
  contador.textContent = contadorClicks;
});
