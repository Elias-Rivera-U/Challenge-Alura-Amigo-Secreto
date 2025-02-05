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


function sortearAmigo () {
    if (amigos.length  == 0) {
        alert("Por favor digite el nombre de sus amigos")
    } else {
        rand = Math.floor((Math.random()*amigos.length))
        resultado(amigos[rand])
    }
}


function resultado(nombre_sorteado) {
    let sorteado = document.getElementById("resultado");
    sorteado.innerHTML = `El nombre sorteado es: ${nombre_sorteado}`;
}


function limpiar_entrada(){
    document.getElementById("amigo").value = "";
}