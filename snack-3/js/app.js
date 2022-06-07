/* 

Snack 3
Dato l’array di nomi:
const myArray = [‘Michele’, ‘Fabio’, ‘Roberto’, ‘Giovanni’, ‘Simone’, ‘Chiara’];
e dati due numeri min e max (min più piccolo di max).

Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
Eseguiamo questo esercizio prima con forEach e poi con filter.

*/


const myArray = ["Michele", "Fabio", "Roberto", "Giovanni", "Simone", "Chiara"];
const min = 2
const max = 4

let nuovoArray = [];


//metodo con forEach
myArray.forEach((nomi, i, arrayOriginale) => {
    if ( i >= min && i <= max){
        nuovoArray.push(nomi);
        
    }
})

console.log(nuovoArray);
console.table(nuovoArray);

//metodo con filter
const nuovoArray2 = myArray.filter((nomi, i, arrayOriginale) => {
    return i >= min && i <= max;
})

console.log(nuovoArray2)
console.table(nuovoArray2)