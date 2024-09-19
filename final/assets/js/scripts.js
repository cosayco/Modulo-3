//Maestro de Productos
const maestro = [
    {nombre: "Leche", precio: 1000},
    {nombre: "Pan de Molde", precio: 2000},
    {nombre: "Queso", precio: 1200},
    {nombre: "Mermelada", precio: 890},
    {nombre: "Azucar", precio: 1300}
];

//Genera mensaje listado de productos
var listadoproductos = "Lista Productos:\n";
maestro.forEach(item => {
    listadoproductos += `- ${item.nombre}: $${item.precio}\n`;
});

//Crea una clase producto con los atributos 'nombre' y 'precio'
class producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.total = precio * cantidad;
    }
}

//Crea la clase carrito que tenga como atributo un arreglo para almacenar los productos
class carro {
    constructor() {
        this.items = [];
    }

    //Crea una funcion que permita agregar productos al carrito
    agregarProducto(item) {
        this.items.push(item);
    }
    //Crea una funcion que permita calcular el total de la compra
    calcularTotal() {
        const total = this.items.reduce((acc, item) => acc + item.total, 0);
        return total;
    }
    //Crea una funcion que permita mostrar el detalle de la compra
    mostrarDetalles() {
        let detalleCarrito = ""
        this.items.forEach(item => {
            detalleCarrito = detalleCarrito + `-Producto: ${item.nombre}, Cantidad: ${item.cantidad}, Precio: $${item.precio}, Total: $${item.total}.\n`;
        });
        console.log(`Detalle Carrito de Compras:\n ${detalleCarrito}`)
        console.log(`Total Carrito de Compras: $ ${this.calcularTotal()}.`)
    }
    //Validacion de datos para ingresar
    buscarPrecio(nombreProducto) {
        const productoEncontrado = maestro.find(item => item.nombre.toLowerCase() === nombreProducto.toLowerCase());
        return productoEncontrado ? productoEncontrado.precio : null;
    }        
    //Crea una funcion que permita finalizar la compra
    finalizarCompra() {
        alert(`¡Compra finalizada!\nEl total de la compra es: $${this.calcularTotal()}`);
        this.mostrarDetalles();
    }
}

function main() {
    const carrito = new carro();

    //Ingreso de productos hasta que el usuario ingrese fin
    while (true) {
        const nombre = prompt(listadoproductos + "\nIngresa el nombre del producto (o 'fin' para terminar):");
        if (nombre.toLowerCase() === "fin") {
            break;
        }

        const precio = carrito.buscarPrecio(nombre);
        if (precio !== null) {
            const cantidad = parseInt(prompt("Ingrese Cantidad del Producto:","1"));
            if (cantidad > 0){
                const item = new producto(nombre, precio, cantidad);
                carrito.agregarProducto(item);
            } else {
                alert("La cantidad debe ser numerico y mayor que 0.");
            }            
        } else {
            alert("Producto no encontrado. Inténtalo nuevamente.");
        }
    }
    carrito.finalizarCompra();
}

main();


