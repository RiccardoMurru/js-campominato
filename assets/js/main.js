/**
 *  Il computer deve generare 16 numeri casuali tra 1 e 100 (numeri vietati).
 *  In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100. 
 *  L’utente non può inserire più volte lo stesso numero.
 *  Se il numero è presente nella lista dei numeri generati (numeri vietati), la partita termina, 
 *  altrimenti si continua chiedendo all’utente un altro numero.
 * 
 *  La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
 *  Al termine della partita il software deve comunicare il punteggio, 
 *  cioè il numero di volte che l’utente ha inserito un numero consentito.


 BONUS:
    All’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
    con difficoltà 0 => tra 1 e 100
    con difficoltà 1 =>  tra 1 e 80
    con difficoltà 2=> tra 1 e 50
 */


var bombs = [];
var newBomb;
var attempts = [];

// inserire numeri random nell'array
for (var i = 0; i < 16; i++) {
    newBomb = getRandomNumber(1, 100);
    bombs.push(newBomb);
}

console.log(bombs);

// chiedere di inserire numeri all'utente
var newAttempt = parseInt( prompt('Inserisci un numero da 1 a 100'));
attempts.push(newAttempt);

// verificare se il numero inserito è all'interno degli array bombe o tentativi
var j = 1;
while (!isInArray(bombs, newAttempt)) {

    switch (isInArray(attempts, newAttempt)) {
        case true:
            newAttempt = parseInt( prompt('Non puoi inserire lo stesso numero più volte, riprova'));
            console.log(attempts);
            
            break;
        case false:
            newAttempt = parseInt( prompt('Complimenti, inserisci un altro numero da 1 a 100'));
            attempts.push(newAttempt);
            console.log(attempts);
            
            break;
    }
    j++;
}

// stampa del risultato

switch (j < 84) {
    case true:
        console.log('Peccato, hai perso. Numero di tentativi: ', j);
        break;
    case false:
        console.log('Complimenti hai vinto!');
        break;
}

// funzione per generare numeri casuali da 1 a 100
function getRandomNumber (min, max) {
    var res = Math.floor( Math.random() * (max - min + 1) + min);
    return res;
}

// funzione per verificare la presenza del numero nell'array
function isInArray (array, number) {
    return (array.includes(number));
    
}