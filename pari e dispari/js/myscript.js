

/*

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. ok
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/


// Chiedo all'utente di scegliere pari  o dispari
let userChoise = prompt('Pari o dispari?')

// creo un ciclo di controllo in maniera che l'utente possa scrivere solo pari o dispari
while (userChoise !== 'pari' && userChoise !== 'dispari'){
    userChoise = prompt('per favore inserisci pari o dispari');
}
console.log("l'utente ha scelto: " + userChoise)

// chiedo all'utente di scrivere un numero da 1 a 5
let userNumber = parseInt(prompt('inserisci un numero da 1 a 5'));

// creo un ciclo di controllo in maniera che l'utente possa scrivere solo un numero tra 1 e 5
while (userNumber > 5 || userNumber < 1){
    userNumber = parseInt(prompt('per favore inserisci un numero tra 1 e 5'));
}
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
console.log('la somma dei due numeri è: ' + sumNumber);

// creo una varibile dandoli come valore una stringa vuota
let winner = '';
let looser = '';

// se il numero è pari, cambio il valore di winner in pari
if (sumNumber % 2 == 0){
    console.log('il numero è pari');
    winner = 'pari'
}

// se il numero è dispari cambio il valore di winner in dispari
else {
    console.log('il numero è dispari');
    winner = 'dispari'
}

// faccio un controllo se il valore di userChoise è uguale al contenuto di winner dato dal ciclo prima
// se sono uguali vince l'utente
if (userChoise == winner){
    console.log('hai vinto');
}

// sennò l'utente ha perso
else{
    console.log('hai perso');
}
