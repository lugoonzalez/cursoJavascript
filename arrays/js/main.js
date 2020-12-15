function concatList(listOne, listTwo) {
    var newList = listOne.concat(listTwo);
    return newList;
}

function countGuest(guest) {
    var result = guest.length;
    return result;
}

var firtList = [];
firtList.push("Juan Perez");
firtList.push("Maria Barrios");
firtList.push("Pedro Molina");

var secondList = [];
secondList.push("Cristina Martinez");
secondList.push("Cielo Muñoz");


const listGuest = concatList(firtList, secondList);
const totalGuest = countGuest(listGuest);

alert("Los invitados son: " + listGuest.join(", "));
alert("El total de invitados son: " + totalGuest);
console.log(listGuest);
console.log(totalGuest);
