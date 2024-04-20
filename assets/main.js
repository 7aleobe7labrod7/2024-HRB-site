// Contenido de main.js

// Funciones de manejo de eventos de mouse
function handleMouseOver(element) {
  element.style.opacity = '1';
}

function handleMouseOut(element) {
  element.style.opacity = '0.8';
}

// // Función para ajustar el tamaño del logo
// function adjustLogoSize() {
//   const logo = document.getElementById("navbar-logo");
//   const windowWidth = window.innerWidth;

//   if (windowWidth <= 768) {
//     logo.style.width = "40%";  // Ajusta el ancho del logo al 40% del contenedor
//     logo.style.maxWidth = "40%"; // Establece el máximo ancho del logo al 40%
//   } else {
//     logo.style.width = "80px"; // Ajusta el ancho del logo a 80px (o el tamaño deseado)
//     logo.style.maxWidth = "none"; // Elimina la restricción del máximo ancho
//   }
// }
