// Creazione dell'array di oggetti
let biciclette = [
  { 
    nome: "Molonia",
    peso: 7.5,
  },
  { 
    nome: "Emonda",
    peso: 6.8,
  },
  { 
    nome: "Bernava",
    peso: 5.3, 
  },
  { 
    nome: "Superbike",
    peso: 7.2, 
  }
];

// Bici con il peso minore
let biciLeggera = biciclette[0];

for (let bici of biciclette) {
  if (bici.peso < biciLeggera.peso) {
    biciLeggera = bici;
  }
}

// Stampare a schermo la bici con peso minore
console.log("La bici più leggera è:", biciLeggera.nome, "col peso di", biciLeggera.peso, "kg");