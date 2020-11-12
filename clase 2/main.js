var selection = parseInt(prompt("Combo 1: frutillas y peras. Combo 2: arandanos y cerezas. Combo 3: manzanas y kiwi. Ingresa el paquete que quieres comprar:"));

if (selection == 1) {
    alert("Elegiste el combo 1, deberás abonar $1000");
} else if (selection == 2) {
    alert("Elegiste el combo 2, deberás abonar $2000");
} else if (selection == 3) {
    alert("Elegiste el combo 3, deberás abonar $3000");
} else {
    alert("El combo elegido no está disponible");
}