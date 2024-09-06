/*
- Desarrolla el código necesario para resolver el ejercicio considerando los siguientes requerimientos:
• El programa debe permitir al usuario seleccionar el tipo de asiento (normal, preferencial, VIP) y la cantidad de asientos reservados.
• Los precios de los asientos son:
    o Asiento normal: $5.000
    o Asiento preferencial: $9.000
    o Asiento VIP: $ 13.000
• Si la cantidad de asientos reservados es mayor o igual a 5, se debe aplicar un descuento del 10%.
• Dentro del código debes utilizar al menos una estructura switch case, un bucle while y una condicional if-else.
• Si el número de asientos seleccionados es igual o menor a 0 se le debe indicar al usuario que debe ingresar un número positivo y volver a solicitarle la cantidad.
• Si el usuario elige cualquier asiento distinto a los tres disponibles, se le debe indicar que esa opción no es válida.
 */


let tipoasiento = 0
let cantidad = 0
let valor = 0
let monto = 0
let descuento = 0

do {
    tipoasiento = parseInt(prompt("Seleccione el tipo de asiento:\n1.- Asiento normal $5.000\n2.- Asiento preferencial $9.000\n3.- Asiento VIP $13.000\n4.- Salir."));
    if (tipoasiento == 1 || tipoasiento == 2 || tipoasiento == 3){
        cantidad = parseInt(prompt("Ingrese la cantidad de asientos que desea reservar:"));
        if (cantidad > 0) {
            console.log(tipoasiento)
            switch (tipoasiento){
                case 1:
                    valor = 5000
                break;
                case 2:
                    valor = 9000
                break;
                case 3:
                    valor = 13000
                break;
                }
                if (cantidad >= 5) { descuento = valor * 0.1; }
                alert("El precio total de su reserva es $"+(cantidad * (valor - descuento)));
        } else {
            alert("La cantidad de asientos debe ser mayor a 0.")
            //break;
        }
    } else {
        if (tipoasiento != 4) { alert("El tipo de asiento ingresado, no corresponde a los listados.") }
        //break;
    }
} 
while (tipoasiento != 4);