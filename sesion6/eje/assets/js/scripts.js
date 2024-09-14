  //Maestro Menu
  const productos = [
    { nombre: 'Martini', precio: 2550 },
    { nombre: 'Cappuccino', precio: 1370 },
    { nombre: 'Latte', precio: 1350 },
    { nombre: 'Mojito', precio: 2290 },
    { nombre: 'Insalata de riso', precio: 6750 },
    { nombre: 'Insalata ai cipollotti', precio: 5990 },
    { nombre: 'Insalata caprese', precio: 8250 }
  ];
  
  //Para guardar selecciones
  const drinks = [];
  const foods = [];
  
  //Agrega y Elimina Bebidas
  function addItemDrink(nombre) {
    const producto = productos.find((p) => p.nombre === nombre);
    if (producto) {
      drinks.push(producto);
    }
  }

  function deleteItemDrink(nombre) {
    const indice = drinks.findIndex((p) => p.nombre === nombre);
    if (indice !== -1) {
      drinks.splice(indice, 1);
    }
  }

  //Agrega y Elimina Comidas
  function addItemFood(nombre) {
    const producto = productos.find((p) => p.nombre === nombre);
    if (producto) {
      foods.push(producto);
    }
  }
  
  function deleteItemFood(nombre) {
    const indice = foods.findIndex((p) => p.nombre === nombre);
    if (indice !== -1) {
      foods.splice(indice, 1);
    }
  }

  //Seleccion de Bebida del menu
  function getDrink() {
    drinks.length = 0;
    (document.getElementById("drink1").checked === true) ? addItemDrink("Martini") : deleteItemDrink("Martini");
    (document.getElementById("drink2").checked === true) ? addItemDrink("Cappuccino") : deleteItemDrink("Cappuccino");
    (document.getElementById("drink3").checked === true) ? addItemDrink("Latte") : deleteItemDrink("Latte");
    (document.getElementById("drink4").checked === true) ? addItemDrink("Mojito") : deleteItemDrink("Mojito");
  }

  //Seleccion de Comida del menu
  function getFood() {
    foods.length = 0;
    (document.getElementById("meal1").checked === true) ? addItemFood("Insalata de riso") : deleteItemFood("Insalata de riso");
    (document.getElementById("meal2").checked === true) ? addItemFood("Insalata ai cipollotti") : deleteItemFood("Insalata ai cipollotti");
    (document.getElementById("meal3").checked === true) ? addItemFood("Insalata caprese") : deleteItemFood("Insalata caprese");
  }

  function getTotals() {
    // Llena la tabla con los productos seleccionados
    //document.getElementById('tabla-carrito').innerHTML = "";
    const tablaItems = document.getElementById('detalle');
    const totalElement = document.getElementById('finalPrice');
    let total = 0;
    tablaItems.innerHTML = '';

    drinks.forEach((producto) => {
        const fila = document.createElement('tr');
        fila.innerHTML = `<td>${producto.nombre}</td><td style='float: right;'>$ ${producto.precio} </td>`;
        tablaItems.appendChild(fila);
        total += producto.precio;
    });

    foods.forEach((producto) => {
        const fila = document.createElement('tr');
        fila.innerHTML = `<td>${producto.nombre}</td><td style='float: right;'>$ ${producto.precio} </td>`;
        tablaItems.appendChild(fila);
        total += producto.precio;
    });

    // Actualiza el total
    totalElement.textContent = `$ ${total}`;
  }

 
