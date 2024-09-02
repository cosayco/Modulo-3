function getInfo() {
    var from = document.getElementById("from")
    var to = document.getElementById("to")
    var trans = "¡Tu vuelo no tiene una escala!"
    
    if (from.value === "Chicago" && to.value === "Venice") {
        trans = "¡Ojo! tu vuelo tiene una escala"
    }; 

    if (from.value === "Boston" && to.value === "Paris") {
        trans = "¡Ojo! tu vuelo tiene una escala"
    }; 

    document.getElementById("trans").textContent = trans
};