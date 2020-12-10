class Catalog {
    constructor(car, model) {
        this.catalog = viewCatalog(car, model);
    }

    viewCatalog() {
        return "Auto: " + this.car + " - Modelo: " + this.model + "\n";
    }
}

let cars = [];
let models = [];

function catalog(arrayCars, arrayModels) {

    cars.push("Peugeot");
    cars.push("Renault");
    cars.push("Chevrolet");
    cars.push("Fiat");
    models.push(2018);
    models.push(2019);

    let result = cars + models;
    return "Marcas y modelos disponibles: " + result;
}

console.log(new Catalog(cars.push()));