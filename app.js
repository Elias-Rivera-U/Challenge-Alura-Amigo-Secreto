//Arreglo amigos
let amigos = [];


function agregarAmigo() {
    let nombre_amigo = document.getElementById("amigo").value;     // Capturar el valor de entrada
    
    if (nombre_amigo == "") {       //Validar la entrada
        alert("Por favor, inserte un nombre.")
    } else {
        amigos.push(nombre_amigo); //Actualizar el array de amigos
        limpiar_entrada()//Limpiar el campo de entrada
        return nombre_amigo;
        
    }
}


function limpiar_entrada(){
    document.getElementById("amigo").value = "";
}