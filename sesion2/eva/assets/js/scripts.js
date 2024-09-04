//Desarrolla el código necesario para resolver el ejercicio considerando los siguientes requerimientos:
//• El usuario deberá ser capaz de ingresar la cantidad y la categoría de productos que desea comprar.
//• Para simplificar el ejercicio, las categorías serán “ropa” y “electrónica”.
//• La categoría “ropa” incluirá un 5% de descuento: Si compro un producto de esta categoría, de valor 1000 pesos, el descuento será 50 pesos, por lo tanto, el valor final será 950 pesos.
//• La categoría “electrónica” incluirá un 10% de descuento: si compro dos productos de esta categoría, de valor 1000 pesos cada uno, el descuento será de 100 pesos por cada uno, por lo tanto, el valor final será 1800 pesos.
//• Debes crear al menos tres funciones: Una para obtener la categoría del producto, otra para calcular el descuento basado en la categoría y una última para calcular el precio total.
//• Los resultados se mostrarán a través de alert() y los datos se solicitarán utilizando prompt().

var categoria = prompt("Ingrese la categoria del producto.\n1. Ropa\n2. Electronica")
var cantidad = parseInt(prompt("Ingrese la cantidad de productos."))
var precio = parseInt(prompt("Ingrese el precio del producto."))

const descuento_categoria = (categoria = 0) => {
    return (categoria === "1" ? 0.05 
        : categoria === "2" ? 0.1 : 0 );
}

const precio_descuento = (precio = 0) => {
    var descuento = descuento_categoria(categoria);
    var preciodescuento = precio - (precio * descuento);
    return preciodescuento
}

const monto_total = (cantidad = 0) => {
    var monto = cantidad * precio_descuento(precio)
    return monto
}

alert("El precio total de su compra es :$ " + monto_total(cantidad))