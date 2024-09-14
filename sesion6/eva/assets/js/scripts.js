/* 
- Desarrolla el código necesario para resolver el ejercicio considerando los siguientes requerimientos:
• Debes crear una función constructora “Tarea” para crear objetos de tipo Tarea con las propiedades “descripción” y “estado” que puede ser pendiente o completada.
• Implementa una función que permita agregar nuevas tareas.
• Implementa una función que permita marcar una tarea como completada.
• Implementa una función que permita filtrar tareas por estado.
• Implementa una función que permita mostrar el número total de tareas.
• Debes utilizar arreglos.
• Debes utilizar métodos propios de los arreglos como “push”, “filter” o “length” para manipular la lista de tareas.
*/

class Tarea {
    constructor(descripcion, estado) {
        this.descripcion = descripcion;
        this.estado = estado;
    }
}

const listaTareas = [];

function agregaTarea(descripcion) {
    const nuevaTarea = new Tarea(descripcion, "pendiente");
    listaTareas.push(nuevaTarea);
    return `Se agrego la tarea "${descripcion}".`
}

function marcaTareaCompletada(descripcion) {
    const completa = listaTareas.find(tarea => tarea.descripcion === descripcion);
    if (completa) {
        completa.estado = "completada";
        return `La tarea "${descripcion}" ha sido marcada como completada.`;
    } else {
        return `No se encontró ninguna tarea con la descripción "${descripcion}".`;
    }
}

function filtraTarea(estado) {
    const filtradas = listaTareas.filter(tarea => tarea.estado === estado);
    const descripcion = filtradas.map(tarea => tarea.descripcion);
    return descripcion;
}

function totalTareas() {
    return listaTareas.length;
}

// Validaciones
console.log(agregaTarea("Comprar leche"));
console.log(agregaTarea("Hacer ejercicio"));
console.log(agregaTarea("Preparar desayuno"));
console.log(agregaTarea("Asistir a clases"));
console.log(agregaTarea("Aprender Javascript"));

console.log(marcaTareaCompletada("Preparar desayuno"));
console.log(marcaTareaCompletada("Asistir"));

console.log("Tareas pendientes:", filtraTarea("pendiente"));
console.log("Total de tareas: " + totalTareas());
