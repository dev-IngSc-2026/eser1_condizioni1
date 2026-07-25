let v = -10;

// 1. Controllo di validità: se v è minore di 0 OPPURE maggiore di 30
if (v < 0 || v > 30) {
    console.log("voto non valido");
} 
// 2. Se passiamo il primo blocco, sappiamo con certezza che il voto è tra 0 e 30
else if (v < 18) {
    console.log("insufficiente");
} 
else if (v >= 18 && v < 21) {
    console.log("sufficiente");
} 
else if (v >= 21 && v < 24) {
    console.log("buono");
} 
else if (v >= 24 && v < 27) {
    console.log("distinto");
} 
else if (v >= 27 && v <= 29) {
    console.log("ottimo");
} 
else if (v === 30) {
    console.log("eccellente");
}