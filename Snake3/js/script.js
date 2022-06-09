// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// creo variabile per la somma
let addNumber = 0; 



for(let i = 0; i < 10; i++ ){
    // chiedo i numeri all'utente
   let userNumber = parseInt (prompt('Scrivi un numero'));

    // sommo i numeri
    addNumber += userNumber;

}

alert(addNumber)