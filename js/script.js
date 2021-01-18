// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for tutte le proprietà.
var studente1 = {
  'name': 'Sabrina',
  'surname': 'Fontana',
  'age': 23
}
console.log('**proprietà dello studente**')
for (var key in studente1) {
  console.log(studente1[key]);
}

// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
var studente2 = {
  'name': 'Sara',
  'surname': 'Bianchi',
  'age': 30
}
var studente3 = {
  'name': 'Marco',
  'surname': 'Rossi',
  'age': 29
}
var studente4 = {
  'name': 'Giulio',
  'surname': 'Verdi',
  'age': 41
}

var arrayStudenti = [studente1, studente2, studente3, studente4];

console.log('**nome e cognome di ogni studente dell\'array**');
for (var i = 0; i < arrayStudenti.length; i++) {
  var singoloStudente = arrayStudenti[i];
  console.log(singoloStudente.name);
  console.log(singoloStudente.surname);
}

// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var nuovoStudente = {};

nuovoStudente.name = prompt('Inserisci nome');
nuovoStudente.surname = prompt('Inserisci cognome');
nuovoStudente.age = parseInt(prompt('Inserisci età'));

arrayStudenti.push(nuovoStudente);

console.log('**proprietà dello studente aggiunto dall\'utente**');
for (var key in nuovoStudente) {
  console.log(nuovoStudente[key]);
}
