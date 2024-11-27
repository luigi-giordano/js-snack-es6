// Creazione dell'array di oggetti delle squadre di calcio
let squadre = [
  { nome: "Juventus", punti: 0, falliSubiti: 0 },
  { nome: "Milan", punti: 0, falliSubiti: 0 },
  { nome: "Inter", punti: 0, falliSubiti: 0 },
  { nome: "Napoli", punti: 0, falliSubiti: 0 }
];

// Funzione per generare numeri random
let getNumbersRandom = (min, max) => Math.floor(Math.random() * (max - min + 1));