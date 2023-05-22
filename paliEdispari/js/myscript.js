

/*



Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

*/
/*

Palidroma

Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

Una parola è palindroma se i caratteri più a sx e più a dx coincidono e se la parte tra loro compresa è palindroma.
*/

// Chiediamo all'utente di inserire una parola con il prompt
const userWord = prompt('inserisci una parola');

// creo una funzione per dire se la parola è palindroma o no
function checkPalindrome(userWord){
    // Devo controllare se i caratteri a sx e destra coincidono, quindi creo una variabile che mi dica quanto è lunga la parola
    const wordFootage = userWord.length;
    // creo un ciclo che mi controlli lettera per lettera se sono uguali o no
    for (let i = 0; i < wordFootage; i++){
        if(userWord[i] !== userWord[wordFootage - 1 - i]){
            return('non è palindroma');
        }
    }
    return('è palindroma');
}
// assegno il valore della funzione ad una costante per richiamarla
const palindrome = checkPalindrome(userWord);
// stampo in console il valore della costante
console.log(palindrome);