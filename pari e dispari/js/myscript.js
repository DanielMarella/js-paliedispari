

/*



Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. ok
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/


// Chiedo all'utente di scegliere pari  o dispari
const userChoise = prompt('Pari o dispari?')
console.log("l'utente ha scelto: " + userChoise)

// chiedo all'utente di scrivere un numero da 1 a 5
const userNumber = parseInt(prompt('inserisci un numero da 1 a 5'));
console.log("l'utente ha scelto il numero " + userNumber);

// creiamo un funzione per il numero randomico del computer
function roundNumber (min, max){
    return Math.floor((Math.random() * max) + min);
}

// creiamo un numero randomico da 1 a 5 per il computer
const computerNumber = roundNumber(1, 5);
console.log('il computer ha scelto il numero: ' + computerNumber);

// creiamo una variabile dove vengono sommati i due numeri scelti dal computer e dall'utente
let sumNumber = 0;
sumNumber = computerNumber + userNumber;
console.log(sumNumber);