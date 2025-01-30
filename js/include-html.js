function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("include-html");
      if (file) {
        /*make an HTTP request using the attribute value as the file name:*/
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /*remove the attribute, and call this function once more:*/
            elmnt.removeAttribute("include-html");
            includeHTML();
          }
        }      
        xhttp.open("GET", file, true);
        xhttp.send();
        /*exit the function:*/
        return;
      }
    }
  };
  includeHTML();


  const images = document.querySelectorAll('.image-stack img');
let currentImageIndex = 0;

function changeImage() {
    images[currentImageIndex].style.opacity = 0; // Oculta la imagen actual
    currentImageIndex = (currentImageIndex + 1) % images.length; // Cambia al siguiente índice
    images[currentImageIndex].style.opacity = 1; // Muestra la nueva imagen
}

// Cambia la imagen cada 3 segundos
setInterval(changeImage, 3000);
