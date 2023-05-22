
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