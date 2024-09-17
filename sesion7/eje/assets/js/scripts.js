const textoRelleno = `lorem ipsum dolor sit amet, consectetur adipiscing elit. pellentesque in efficitur nulla. sede porttitor eros at sodales mattis. nulla a sapien ut lectus molestie fringilla eu ut tortor. fusce vestibulum ullamcorper odio sed ultrices. vivamus quam dui, ullamcorper vel massa nec, laoreet vehicula lacus. etiam efficitur sollicitudin massa sit amet vulputate. ut non enim nec augue interdum consectetur. vivamus et dui tincidunt, tempus nibh ut, lobortis lorem. nullam nec sem eget nulla varius fringilla. curabitur tincidunt dolor et velit tempor ullamcorper. phasellus at erat id est lacinia imperdiet et sed tortor. aenean at eros lacinia, dapibus dolor in, vehicula mi. suspendisse finibus sem metus, at consectetur est sagittis at. nam malesuada dictum finibus. nulla condimentum quam lorem, ac interdum felis rhoncus quis. suspendisse fringilla, orci sed malesuada dictum, massa elit volutpat justo, at vehicula ligula erat id velit. morbi a iaculis ligula. aliquam quis ex vitae sapien ullamcorper tempor. suspendisse nisi ex, gravida vel nibh et, molestie vulputate metus. nam imperdiet magna ut congue iaculis. nam vehicula sagittis nisi, efficitur consectetur erat dignissim eu. vestibulum vitae magna ante. praesent at pellentesque metus, in volutpat massa. duis odio erat, pulvinar non nibh eget, euismod suscipit urna. nulla semper convallis hendrerit. phasellus luctus, ligula ac semper laoreet, ligula lacus pretium mauris, eget accumsan enim ligula a augue. vivamus sollicitudin dapibus vulputate. sed vitae orci ac neque pretium semper sed at mi. morbi egestas pellentesque lacus quis pretium.`;
const palabrasRepetidas = ["sed","vehicula","vivamus","nam","eros","vestibulum","quam","sollicitudin","finibus","dictum","morbi"];
const numerosTexto = ["CERO","UNO","DOS","TRES","CUATRO","CINCO","SEIS","SIETE","OCHO","NUEVE","DIEZ","ONCE"];
const contadorPalabras = {};
const palabras = textoRelleno.split(/\W+/); // Obtén todas las palabras del texto de relleno

// Recorre las palabras y cuenta las ocurrencias
palabras.forEach(palabra => {
    if (palabrasRepetidas.includes(palabra)) {
        contadorPalabras[palabra] ||= 0;
        contadorPalabras[palabra]++;
    }
});

// Reemplaza las palabras por números
let textoModificado = textoRelleno;
palabrasRepetidas.forEach((palabra, indice) => {
    const numero = indice + 1;
    textoModificado = textoModificado.replaceAll(palabra, `<strong>${numerosTexto[numero]}</strong>`);
});

// Muestra el texto modificado en el párrafo
document.getElementById('reemplazo').innerHTML = textoModificado;

// Muestra las ocurrencias de cada palabra
contadorPalabras.sed ||= (contadorPalabras.sed == 6);
console.log(`%csed: ${contadorPalabras.sed}`,'color: #FF5500')
console.log(`%cvehicula: ${contadorPalabras.vehicula}`,'color: #FF99B2') 
console.log(`%cvivamus: ${contadorPalabras.vivamus}`,'color: #FF99F5') 
console.log(`%cnam: ${contadorPalabras.nam}`,'color: #BB99FF') 
console.log(`%ceros: ${contadorPalabras.eros}`,'color: #99C5FE') 
console.log(`%cvestibulum: ${contadorPalabras.vestibulum}`,'color: #00CEFF') 
console.log(`%cquam: ${contadorPalabras.quam}`,'color: #01FFFE') 
console.log(`%csollicitudin: ${contadorPalabras.sollicitudin}`,'color: #00FF9F') 
console.log(`%cfinibus: ${contadorPalabras.finibus}`,'color: #B6FF01') 
console.log(`%cdictum: ${contadorPalabras.dictum}`,'color: #FFFF00') 
console.log(`%cmorbi: ${contadorPalabras.morbi}`,'color: #FFB600') 

