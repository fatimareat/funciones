
function cambiarColorNegro(elemento) {
    elemento.style.backgroundColor = 'black';
}

const divAzul = document.getElementById("divAzul");
const divRojo = document.getElementById("divRojo");
const divVerde = document.getElementById("divVerde");
const divAmarillo = document.getElementById("divAmarillo");

divAzul.addEventListener("click", function() {
    cambiarColorNegro(divAzul);
});
divRojo.addEventListener("click", function() {
    cambiarColorNegro(divRojo);
});
divVerde.addEventListener("click", function() {
    cambiarColorNegro(divVerde);
});
divAmarillo.addEventListener("click", function() {
    cambiarColorNegro(divAmarillo);
});