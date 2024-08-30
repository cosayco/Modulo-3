$(document).ready(function() {

    function actualizarFechaHora() {
        var fecha = new Date();
        var dia = ("0" + fecha.getDate()).slice(-2);
        var mes = ("0" + (fecha.getMonth() + 1)).slice(-2);
        var anio = fecha.getFullYear();
        var horas = ("0" + fecha.getHours()).slice(-2);
        var minutos = ("0" + fecha.getMinutes()).slice(-2);
        var segundos = ("0" + fecha.getSeconds()).slice(-2);
        
        var Fecha = dia + "/" + mes + "/" + anio
        var Hora = horas + ":" + minutos + ":" + segundos;
        $("#insertDate").text(Fecha);
        $("#insertTime").text(Hora);
    }
    
    setInterval(actualizarFechaHora, 1000);

    function generarNumeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    var numeroVuelo = generarNumeroAleatorio(1000, 5000);
    var numeroTerminal = generarNumeroAleatorio(10, 30);
    $("#flightNumber").text(numeroVuelo);
    $("#terminalNumber").text(numeroTerminal);

    setInterval(function() {
        alert("Estimado Pasajero, se le recuerda que para abordar el avión debe tener en mano su pasaporte y su boleto de embarque. Manténgase atento a los avisos mediante esta plataforma.");
    }, 20000);

});