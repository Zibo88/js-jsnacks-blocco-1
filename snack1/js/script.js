// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e
// in verde i numeri pari.


// numeri da selezionare
let myNumber = [1, 2, 3, 4, 5 , 6, 7, 8 , 9, 10];
// console.log(myNumber);

for(let i = 0; i < myNumber.length; i++) {

    // console.log(myNumber[i]);
    
    // prendo ogni singolo elemento dell'array
    let numberResult = myNumber[i];

    if (numberResult % 2 === 0){
        
        // seleziono il primo div e gli appendo il risultato
        document.getElementById('red').innerHTML += numberResult; 

    }else { //seleziono il secondo div e gli appendo il risultato
        document.getElementById('green').innerHTML += numberResult; 
    }
}