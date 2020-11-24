var days = [10, 23, 54, 98, 100, 7, 103, 98, 55, 74, 13, 1, 85, 72];


for (var i=0; i<days.length; i++) {

    if (i == 7) {
        alert("En la lista está el nñumero 7, el revólver en la quiniela")
    }

    if (i % 2 == 0) {
        alert("Los números pares son: " + days);
    }
}