// SNACK 1
// Crea una funzione che somma due numeri
// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
function sommaDichiarativa(a, b) {
    return a + b
}

// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
const sommaAnonima = function (a, b) {
    return a + b
}

// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions
const sommaArrow = (a, b) => a + b


// SNACK2
// Crea una funzione eseguiOperazione
// Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.

const somma = (a, b) => a + b;
const moltiplica = (a, b) => a * b;
const sottrai = (a, b) => a - b;
const dividi = (a, b) => a / b;

const eseguiOperazione = (a, b, operazione) => operazione(a, b);

console.log(eseguiOperazione(2, 3, somma));
console.log(eseguiOperazione(3, 4, moltiplica));
console.log(eseguiOperazione(3, 2, sottrai));
console.log(eseguiOperazione(4, 2, dividi));