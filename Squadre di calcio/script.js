// Creazione dell'array di oggetti delle squadre di calcio
let squadre = [
  { 
    nome: "Juventus",
    punti: 0,
    falliSubiti: 0 
  },
  { 
    nome: "Milan",
    punti: 0,
    falliSubiti: 0 
  },
  { 
    nome: "Inter",
    punti: 0,
    falliSubiti: 0 
  },
  { 
    nome: "Napoli",
    punti: 0,
    falliSubiti: 0 
  }
];

// Funzione per generare numeri random
let getNumbersRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

for(let squadra of squadre){
  squadra.puntiFatti = getNumbersRandom(0,30);
  squadra.falliSubiti = getNumbersRandom(0,30)
}


const nuoveSquadre = [];

for(let squadra of squadre){
  const nuovaSquadra = {
    nome: squadra.nome,
    falliSubiti: squadra.falliSubiti
  }
  nuoveSquadre.push(nuovaSquadra)

}
console.log(nuoveSquadre)