

/*



Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
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

// creiamo un numero randomico da 1 a 5 per il computer
const computerNumber = Math.floor((Math.random() * 5) + 1);
console.log('il computer ha scelto il numero: ' + computerNumber);

// creiamo una variabile dove vengono sommati i due numeri scelti dal computer e dall'utente
const sumNumber = userNumber + computerNumber;
console.log(sumNumber);