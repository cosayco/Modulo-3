function getInfo() {
    var from = document.getElementById("from")
    var to = document.getElementById("to")
    
    console.log(from.value)
    console.log(to.value)

    trans = (from.value === "Chicago" && to.value === "Venice") ? "¡Ojo! tu vuelo tiene una escala" 
            : (from.value === "Boston" && to.value === "Paris") ? "¡Ojo! tu vuelo tiene una escala" : "¡Tu vuelo no tiene una escala!";

    document.getElementById("trans").textContent = trans
};