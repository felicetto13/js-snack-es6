/* 

Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa 
con le seguenti proprietà: nome e peso.

Stampare a schermo la bici con peso minore 
utilizzando destructuring e template literal

*/


//ccreo array di oggetti 

let bici = [
    {
    nome: "Atala meccanica",
    peso: 37,
},
{
    nome: "Scott Scott",
    peso: 47,
},
{
    nome: "Cannondale",
    peso: 57,
},
{
    nome: "Cervelo ",
    peso: 24,
},
{
    nome: "Orbea",
    peso: 41,
}
]

let pesoR = 0;
let pesoMinore;
const container = document.getElementById("container")
for (let i = 0; i < bici.length; i++){
    controllaPeso(bici[i]);
}
const {nome, peso} = pesoMinore;
container.innerHTML = `
<h1>La bici che pesa di meno è la seguente:</h1>
<h3>Nome bici: ${nome}</h3>
<h3>Peso bici: ${peso}</h3>
`
console.log(nome, peso)
// creo funzione che controlli il peso delle bici e trovi quella con peso minore
function controllaPeso (bici) {
    
    
    if (pesoR === 0 || pesoR > bici.peso) {
        pesoR = bici.peso;
        pesoMinore = bici;
    }
}