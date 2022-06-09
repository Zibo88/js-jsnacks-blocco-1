// Chiedi un numero di 4 cifre all’utente nel prompt
// e calcola la somma di tutte le cifre che compongono il numero. 

let userNumber = prompt('scrivi 4 numeri da 1 a 9');

// parto da zero e aggiungo ogni singolo numero dato dall'utente

// creo una variabile che inizi da 0

let addNumber = 0;

for(let i = 0; i < userNumber.length; i++) {

    let singleNumber = parseInt(userNumber[i]);

    addNumber += singleNumber; 

}

console.log(addNumber)