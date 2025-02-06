let amigos = []; // Arreglo para almacenar los nombres

function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

        if (nombreAmigo === "") {
            alert("Por favor, escribe un nombre.");
            return;
    }

    if (/\d/.test(nombreAmigo)) {
        alert("Por favor, solo introduzca nombres.");
        return;
    }

    // Verificar si el nombre ya existe en la lista (ignorando mayúsculas y minúsculas)
    if (amigos.map(nombre => nombre.toLowerCase()).includes(nombreAmigo.toLowerCase())) {
        alert("Este nombre ya está en la lista. Por favor, escribe un nombre diferente.");
        return;
    }

    // Agregar el nombre al arreglo
    amigos.push(nombreAmigo);

    // Limpiar la lista antes de actualizarla
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    // Iterar sobre el arreglo y agregar cada nombre a la lista
    for (let i = 0; i < amigos.length; i++) {
        const nuevoAmigo = document.createElement("li");
        nuevoAmigo.textContent = amigos[i];
        listaAmigos.appendChild(nuevoAmigo);
    }

    inputAmigo.value = "";
    inputAmigo.focus();
}

function sortearAmigo() {
    const listaAmigos = document.getElementById("listaAmigos");
    const nombres = listaAmigos.getElementsByTagName("li");

    if (nombres.length === 0) {
        alert("No hay nombres en la lista. Agrega algunos amigos primero.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    const nombreSeleccionado = nombres[indiceAleatorio].textContent;

    const nombreEnMayusculas = nombreSeleccionado.toUpperCase();
    const tituloAmigoSecreto = document.getElementById("tituloAmigoSecreto");
    tituloAmigoSecreto.textContent = `Tu amigo secreto es, ${nombreEnMayusculas}`;
}

// Llamada de acción: Detectar la tecla "Enter" en el campo de texto
const inputAmigo = document.getElementById("amigo");
inputAmigo.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        agregarAmigo();
    }
});

// Llamada de acción: Detectar el clic en el botón "Añadir"
const botonAgregar = document.querySelector(".button-add");
botonAgregar.addEventListener("click", function () {
    agregarAmigo();
});

// Llamada de acción: Detectar el clic en el botón "Sortear Amigo"
const botonSortear = document.querySelector(".button-draw");
botonSortear.addEventListener("click", function () {
    sortearAmigo();
});