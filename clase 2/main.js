var selection = parseInt(prompt("Combo 1: frutillas y peras. Combo 2: arandanos y cerezas. Combo 3: manzanas y kiwi. Ingresa el paquete que quieres comprar:"));
var neighborhood;
var shipping; 
var price; 

if (selection == 1) {
    // Esto de asignarle el precio a una variable no escala, lo manejaría distinto integrando un backend
    price = 350;
    alert("Elegiste el combo 1 que contiene frutillas y peras.");
    neighborhood = prompt("Barrios disponibles para entregas: San Telmo, Barracas, Constitucion, Congreso, Monserrat. Ingresa el nombre de tu barrio:");
} else if (selection == 2) {
    price = 450;
    alert("Elegiste el combo 2 que contiene arandanos y cerezas.");
    neighborhood = prompt("Barrios disponibles para entregas: San Telmo, Barracas, Constitucion, Congreso, Monserrat. Ingresa el nombre de tu barrio:");
} else if (selection == 3) {
    price = 550;
    alert("Elegiste el combo 3 que contiene manzanas y kiwi.");
    neighborhood = prompt("Barrios disponibles para entregas: San Telmo, Barracas, Constitucion, Congreso, Monserrat. Ingresa el nombre de tu barrio:");
} else {
    alert("El combo elegido no está disponible.");
    neighborhood = 0;
}


if (neighborhood === "San Telmo" || neighborhood === "Barracas" || neighborhood === "Constitucion") {
    //Mismo comentario de asignar un precio en una variable
    shipping = 100;
    alert("Combo + " + "envío: $" + (price + shipping));
} else if (neighborhood === "Congreso" || neighborhood === "Monserrat") {
    shipping = 150;
    alert("Combo + " + "envío: $" + (price + shipping));
} else if (neighborhood == 0) {
    alert("Elegiste un combo no disponible, volvé a empezar.");
} else {
    alert("No hacemos envíos en esa zona.");
}
