class usuario {
    constructor(nombre, email, trabajo, telefono, acercade) {
        this.nombre = nombre
        this.email = email
        this.trabajo = trabajo
        this.telefono = telefono
        this.acercade = acercade
    }
}

function presentar(){
    let nuevoUsuario = new usuario(document.getElementsByName("name"),document.getElementsByName("email"),document.getElementsByName("work"),document.getElementsByName("phone"),document.getElementsByName("bio"));

    document.getElementById("correo").value = nuevoUsuario.email;
    document.getElementById("telefono").value = nuevoUsuario.telefono;
    document.getElementById("sobreMi").value = nuevoUsuario.acercade;

}