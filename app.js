//Arreglo amigos
let amigos = [];


function agregarAmigo() {
    let nombre_amigo = document.getElementById("amigo").value;     // Capturar el valor de entrada
    
    if (nombre_amigo == "") {       //Validar la entrada
        alert("Por favor, inserte un nombre.")
    } else {
        amigos.push(nombre_amigo); //Actualizar el array de amigos
        actualizarLista()
        limpiar_entrada()//Limpiar el campo de entrada
        return nombre_amigo;
        
    }
}


function actualizarLista() {
    let lista = document.getElementById("listaAmigos"); // Obtener el elemento de la lista
    lista.innerHTML = ""; // Limpiar la lista antes de agregar nuevos elementos

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); // Crear un nuevo elemento <li>
        li.textContent = amigos[i]; // Asignar el nombre del amigo al <li>
        lista.appendChild(li); // Agregar el <li> a la lista
    }
}


function limpiar_entrada(){
    document.getElementById("amigo").value = "";
}