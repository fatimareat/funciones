
// Función para agregar un nuevo div
function agregarElemento(color) {
    const contenedor = document.getElementById("contenedor");
    const nuevoElemento = document.createElement("div");
    nuevoElemento.style.backgroundColor = color;
    nuevoElemento.classList.add("nuevoDiv");
    contenedor.appendChild(nuevoElemento);
}

let color;

document.addEventListener('keydown', function (event) {
    const divKey = document.getElementById("key");
    
    if (event.key === 'a') {
        color = 'pink';
        divKey.style.backgroundColor = color;
    } else if (event.key === 's') {
        color = 'orange';
        divKey.style.backgroundColor = color;
    } else if (event.key === 'd') {
        color = 'skyblue';
        divKey.style.backgroundColor = color;
    }
    // Crear nuevos divs y asignarles un color
    else if (event.key === "q" || event.key === "Q") {
        agregarElemento("purple");
    } else if (event.key === "w" || event.key === "W") {
        agregarElemento("gray");
    } else if (event.key === "e" || event.key === "E") {
        agregarElemento("SaddleBrown");
    }
});

