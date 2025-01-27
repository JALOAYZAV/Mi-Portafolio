import './include-html.js';




// Espera a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todos los enlaces del menú
  const links = document.querySelectorAll('a[href^="#"]');

  // Asigna un evento de clic a cada enlace
  links.forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault(); // Evita que el enlace se comporte de manera predeterminada
          const targetId = this.getAttribute('href'); // Obtiene el ID del destino
          const targetElement = document.querySelector(targetId); // Encuentra el elemento destino
          
          window.scrollTo({
              top: targetElement.offsetTop, // Desplázate a la parte superior del elemento
              behavior: "smooth" // Aplica el desplazamiento suave
          });
      });
  });
});
