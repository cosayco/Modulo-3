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
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let work = document.getElementById("work").value;
    let phone = document.getElementById("phone").value;
    let bio = document.getElementById("bio").value;
    let nuevoUsuario = new usuario(name, email, work, phone, bio);

    document.getElementById("nombre").textContent = nuevoUsuario.nombre;
    document.getElementById("trabajo").textContent = nuevoUsuario.trabajo;
    document.getElementById("correo").textContent = nuevoUsuario.email;
    document.getElementById("telefono").textContent = nuevoUsuario.telefono;
    document.getElementById("sobreMi").textContent = nuevoUsuario.acercade;
}