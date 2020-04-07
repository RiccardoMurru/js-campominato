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


/**
 * Inizializzazione
 */

var bombs = [];
var newBomb = 0;
var attempts = [];
var possibilities = 0;
var difficulty = -1;


// chiedere all'utente la difficoltà finché non inserisce un numero valido (0, 1, 2)
while (!isValidNumber(difficulty, -1, 2)) {
    difficulty = parseInt( prompt (' Inserisci: \n 0 per facile \n 1 per normale \n 2 per difficile'));    
}

// se numero inserito è valido settare il numero massimo di possibilità
switch (difficulty) {
    case 0:
        possibilities = 84;
        break;
    case 1:
        possibilities = 64;
        break;
    case 2:
        possibilities = 34;
        break;
}


// inserire numeri random nell'array
var i = 0;

while (i < 16) {
    newBomb = getRandomNumber(1, 100);

    if (!isInArray(bombs, newBomb)) {
        bombs.push(newBomb);
        i++;
    }
}


console.log(bombs.sort());


/**
 * Loop principale
 */



// chiedere di inserire numeri all'utente
var attemptsCounter = 0;
var newAttempt = 0;

while ( (attempts.length < possibilities) && (!isInArray(bombs, newAttempt)) ) {
    newAttempt = parseInt(prompt('Inserisci un numero da 1 a 100'));
    
    // verificare se il numero inserito è valido e se è all'interno degli array bombe o tentativi
    validateNumber(newAttempt);
    
    // stampa del risultato
   switch (attempts.length == possibilities) {
       case true:
           console.log('Hai vinto, numero tentativi', attemptsCounter);
           break;
   }   
  
}       


/**
 *  Funzioni 
 */



// funzione per generare numeri casuali da 1 a 100
function getRandomNumber (min, max) {
    var res = Math.floor( Math.random() * (max - min + 1) + min);
    return res;
}

// funzione per verificare la presenza del numero nell'array
function isInArray (array, number) {
    return (array.includes(number));
    
}

// funzione per stabilire se un numero è valido
function isValidNumber (number, min, max) {
    return ((number != isNaN) && (number > min) && (number <= max));
}

// funzione per validare il numero inserito dall'utente
function validateNumber(number) {
    if (isInArray(bombs, number)) {
        console.log('Hai perso, numero di tentativi ', attemptsCounter);
        
    } else if (isInArray(attempts, number)) {
        alert('Numero già inserito, riprova');

    } else if (!isValidNumber(number, 0, 100)) {
        alert('Numero non valido, riprova');

    } else if (!isInArray(attempts, number)) {
        attempts.push(number);
        attemptsCounter++;
    }
}