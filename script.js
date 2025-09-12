// // SNACK 1
// // Crea una funzione che somma due numeri
// // Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
function sommaDichiarativa(a, b) {
    return a + b
}

// // Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
const sommaAnonima = function (a, b) {
    return a + b
}

// // Quindi, riscrivi la funzione somma con la sintassi delle arrow functions
const sommaArrow = (a, b) => a + b


// // SNACK2
// // Crea una arrow function che calcola il quadrato di un numero.
// // Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga
const quadrato = (n) => n * n;

console.log(quadrato(6))



// // SNACK3
// // Crea una funzione eseguiOperazione
// // Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.

const somma = (a, b) => a + b;
const moltiplica = (a, b) => a * b;
const sottrai = (a, b) => a - b;
const dividi = (a, b) => a / b;

const eseguiOperazione = (a, b, operazione) => operazione(a, b);

console.log(eseguiOperazione(2, 3, somma));
console.log(eseguiOperazione(3, 4, moltiplica));
console.log(eseguiOperazione(3, 2, sottrai));
console.log(eseguiOperazione(4, 2, dividi));


// // SNACK4
// // Crea un generatore di funzioni creaTimer
// // Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".
function creaTimer(time) {
    return function () {
        setTimeout(() => {
            console.log("Tempo scaduto")
        }, time)
    }
}

const time2s = creaTimer(2000);
time2s()


// // SNACK5
// // Crea una funzione stampaOgniSecondo con setInterval.
// // Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.
// // Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.

function stampaOgniSecondo(messaggio) {
    return function () {
        const intervallo = setInterval(() => {
            console.log(messaggio)
        }, 1000)

        setTimeout(() => {
            clearInterval(intervallo)
        }, 4000)
    }
}

const messaggio1 = stampaOgniSecondo("messaggio1")
messaggio1()


// // SNACK6
// // Crea un contatore automatico con setInterval
// // Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.

function creaContatoreAutomatico(time) {
    return function () {
        let count = 0
        const contatore = setInterval(() => {
            count++
            console.log(count)
        }, time)

        setTimeout(() => {
            clearInterval(contatore)
        }, 5000)
    }
}

const incremento = creaContatoreAutomatico(1000);
incremento()


// SNACK7
// Crea una funzione che ferma un timer dopo un certo tempo
// Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.

function eseguiEferma(messaggio, avvio, stop) {
    return function () {
        const inizio = setInterval(() => {

            setTimeout(() => {
                console.log(messaggio)
            }, avvio)
        }, 2000)

        setTimeout(() => {
            clearInterval(inizio)
        }, stop)


    }
}

const avvio1 = eseguiEferma("ciao", 2000, 20000);
avvio1()