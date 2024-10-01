// Creamos un Symbol para representar la propiedad privada del salario
const salarioPrivado = Symbol('salario');

// Definimos la estructura de datos para un empleado
class Empleado {
  constructor(nombre, puesto, salario) {
    this.nombre = nombre;
    this.puesto = puesto;
    this[salarioPrivado] = salario;
  }

  // Método para obtener el salario (solo accesible por el rol "gerente")
  obtenerSalario(rol) {
    if (rol === 'gerente') {
      return this[salarioPrivado];
    } else {
      throw new Error('Acceso denegado. Solo los gerentes pueden ver el salario.');
    }
  }

  // Método para actualizar la información personal (nombre y puesto)
  actualizarInfoPersonal(rol, nuevoNombre, nuevoPuesto) {
    if (rol === 'gerente') {
      this.nombre = nuevoNombre;
      this.puesto = nuevoPuesto;
    } else {
      throw new Error('Acceso denegado. Solo los gerentes pueden actualizar la información personal.');
    }
  }
}

// Creamos un objeto Proxy para controlar el acceso a las propiedades
const handler = {
  get(target, propiedad, receptor) {
    if (propiedad === 'obtenerSalario') {
      return target[propiedad].bind(target);
    } else {
      throw new Error('Acceso denegado. No puedes acceder directamente a esta propiedad.');
    }
  }
};

// Creamos una instancia de Empleado
const empleado1 = new Empleado('Juan Pérez', 'Desarrollador', 50000);

// Creamos el Proxy para el empleado
const empleadoProxy = new Proxy(empleado1, handler);

// Ejemplo de uso
try {
  console.log(empleadoProxy.obtenerSalario('gerente')); // Acceso permitido
  //console.log(empleadoProxy.salario); // Esto lanzará un error
  //empleadoProxy.actualizarInfoPersonal('empleado', 'Nuevo Nombre', 'Nuevo Puesto'); // Esto también lanzará un error
} catch (error) {
  console.error(error.message);
}
