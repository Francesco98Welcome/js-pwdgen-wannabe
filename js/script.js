const nome = prompt("Qual'è il tuo nome?");
const cognome = prompt("Qual'è il tuo cognome?");
const favouriteColor = prompt("Qual'è il tuo colore preferito?");

const result = nome + cognome + favouriteColor;

document.getElementById('result').innerHTML = result + 21;