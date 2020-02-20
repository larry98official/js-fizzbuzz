var numeri = 100;
var divisioneTre;
var divisioneCinque;
var listaNumeri;

for (var i = 1; i <= numeri; i++) {

    divisioneTre = i % 3;
    divisioneCinque = i % 5;

    if (divisioneTre == 0 && divisioneCinque != 0) {
        console.log('Fizz');
        listaNumeri = 'Fizz';
    }
    else if (divisioneCinque == 0 && divisioneTre != 0) {
        console.log('Buzz');
        listaNumeri = 'Buzz';
    }
    else if (divisioneCinque == 0 && divisioneTre == 0) {
        console.log('FizzBuzz')
        listaNumeri = 'FizzBuzz';
    }
    else {
        console.log(i);
        listaNumeri = i;
    }

    document.getElementById('numero'+i).innerHTML = listaNumeri;
}
