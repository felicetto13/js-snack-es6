/* 

Snack2
Creare un array di oggetti di squadre di calcio. 
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.

Nome sarà l’unica proprietà da compilare, 
le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.


Infine usando la destrutturazione creiamo un nuovo array i cui elementi 
contengono solo nomi e falli subiti e stampiamo tutto in console.


*/

//Creare un array di oggetti di squadre di calcio. 

let squadre = [
    {
        nome: "Milan",
        punti_fatti: 0,
        falli_subiti: 0,
    },
    {
        nome: "Monopoli",
        punti_fatti: 0,
        falli_subiti: 0,
    },
    {
        nome: "Roma",
        punti_fatti: 0,
        falli_subiti: 0,
    },
    {
        nome: "Sassuolo",
        punti_fatti: 0,
        falli_subiti: 0,
    },
    {
        nome: "Juventus",
        punti_fatti: 0,
        falli_subiti: 0,
    },
    {
        nome: "Napoli",
        punti_fatti: 0,
        falli_subiti: 0,
    },
    {
        nome: "Palermo",
        punti_fatti: 0,
        falli_subiti: 0,
    },
];

let nuovaListaSquadre = [];

//inseriamo i numeri random

for (let i = 0; i < squadre.length; i++) {
    squadre[i].punti_fatti = randomNumber();
    squadre[i].falli_subiti  = randomNumber();
    console.log(squadre[i]);
    const {nome,falli_subiti} = squadre[i];
    nuovaListaSquadre.push({nome,falli_subiti});
}

stampaSquadre()


// funzione che generi numeri random per le chiavi punti fatti e falli subiti
function randomNumber() {
    return Math.floor(Math.random() * 99);
}

//funzione che stampa in console il nuovo array di oggetti
function stampaSquadre (){
    console.log(nuovaListaSquadre)
}