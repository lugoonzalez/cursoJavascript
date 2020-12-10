
class Car {
    constructor(newBrand, newModel, newYear) {
        this.brand = newBrand;
        this.model = newModel;
        this.year = parseInt(newYear);
    }

    carDetails() {
        return "Marca: " + this.brand + " - Modelo: " + this.model + " - Año: " + this.year + "\n";
    }
}

function addCar() {
    let newBrand = prompt("Ingresar marca");
    let newModel = prompt("Ingresar modelo");
    let newYear = prompt("Ingresar año");
    return new Car(newBrand, newModel, newYear);
}


let enterCar = prompt("Apretar 1 para agregar un nuevo registro de auto.");
let cars = [];

while (enterCar == 1) {
    cars.push(addCar());
    enterCar = prompt("Apretar 1 para agregar un nuevo registro de auto. Salir apretando cualquier tecla.");
}

if (cars.length > 0) {
    let cardList = "Autos cargados en el sistema: \n";
    for (const car of cars) {
        cardList += car.carDetails();
    }
    alert(cardList);
} else {
    alert("No hay autos registrados.");
}
