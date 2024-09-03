//Desarrolla el código necesario para resolver el ejercicio considerando los siguientes requerimientos:
//• Crea un programa que pregunte al usuario la temperatura actual y la cantidad de tiempo libre disponible.
//• La función debe determinar si es un buen momento para organizar un picnic. Las condiciones son las siguientes:
//    o Es un buen momento si la temperatura se encuentra entre 12 y 30 grados.
//    o Es un buen momento si no hay lluvia.
//    o Es un momento si tiene más de 90 minutos disponibles.

//• Debes utilizar operadores ternarios u operadores lógicos para evaluar estas condiciones y mostrar
//un mensaje adecuado al usuario

var temperatura = prompt("¿Cual es la temperatura actual en grados Celsius?")
var lluvia = prompt("¿Esta lloviendo? (responde si o no)")
var minutos = prompt("¿Cuantos minutos tienes disponibles para el Picnic?")

const validarPicnic = (temperatura, lluvia, minutos) => {
    return ((temperatura >= 12 && temperatura <= 30 && lluvia === "no" && minutos > 90) ? "¡Es un buen momento para organizar un picnic!"
    : "No es un buen momento para un Picnic")
}

alert(validarPicnic(temperatura, lluvia, minutos))