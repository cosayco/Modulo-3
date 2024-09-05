//- Desarrolla el código necesario para resolver el ejercicio considerando los siguientes requerimientos:
//• Debes crear una función constructora para crear objetos de tipo Empleado con los atributos ‘nombre’, ‘salario’ y ‘departamento’.
//• Implementa métodos dentro de la función constructora para realizar operaciones como calcular el salario después de un aumento, cambiar el departamento y obtener detalles del empleado.
//• En los métodos solicitados, debes utilizar la palabra clave ‘this’ para referenciar las propiedades del objeto.
//• En la imagen a continuación podemos ver la salida en la consola de los detalles del objeto cuando recién ha sido creado, cuando ha recibido un aumento y cuando se ha cambiado de departamento.

class Empleado {
    constructor(nombre, salario, departamento){
        this.nombre = nombre
        this.salario = salario
        this.departamento = departamento
    }
    aumentoSalario(monto){
        this.salario = this.salario + monto
        return(`Nombre: ${this.nombre}, Salario: $${this.salario}, Departamento: ${this.departamento}`)
    }
    cambioDepartamento(nuevodepartamento){
        this.departamento = nuevodepartamento
        return(`Nombre: ${this.nombre}, Salario: $${this.salario}, Departamento: ${this.departamento}`)
    }
    detalles(){
        return(`Nombre: ${this.nombre}, Salario: $${this.salario}, Departamento: ${this.departamento}`)
    }
}

const empleadoUno = new Empleado("Juan Perez",50000,"Ventas")

console.log(empleadoUno.detalles())
console.log(empleadoUno.aumentoSalario(5000))
console.log(empleadoUno.cambioDepartamento("Marketing"))

