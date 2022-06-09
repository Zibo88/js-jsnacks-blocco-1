// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

// creo un array vuoto
let empty = [];

// creo un ciclo per inserire i numeri
for(let i = 0; i < 6; i++){
    // chiedo all'utente dei numeri
    let userNumber = parseInt(prompt('dammi un numero tra 1 e 9'))

    // condizione
    if(userNumber % 2 != 0) {

        empty.push(userNumber);
    }

    console.log(empty)
}