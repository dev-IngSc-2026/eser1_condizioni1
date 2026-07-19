// Dichiariamo la variabile con un voto di prova (prova a mettere -10, 35, 18, ecc. per testare)
let v = 29;

console.log("--- SOLUZIONE CON IF / ELSE ---");

// 1. Prima di tutto, escludiamo i voti impossibili.
// Usiamo l'operatore OR (||) per dire: se il voto è minore di zero OPPURE maggiore di 30
if (v < 0 || v > 30) {
    console.log("voto non valido");
} 
// 2. Ora che siamo sicuri che il voto è tra 0 e 30, applichiamo la logica della consegna
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


console.log("--- SOLUZIONE CON SWITCH ---");

// Per usare uno switch con dei range di numeri (maggiore/minore) e non con valori esatti,
// il trucco che si impara a lezione è passare "true" allo switch e mettere le condizioni nei case.
switch (true) {
    case (v < 0 || v > 30):
        console.log("voto non valido");
        break;
    case (v < 18):
        console.log("insufficiente");
        break;
    case (v >= 18 && v < 21):
        console.log("sufficiente");
        break;
    case (v >= 21 && v < 24):
        console.log("buono");
        break;
    case (v >= 24 && v < 27):
        console.log("distinto");
        break;
    case (v >= 27 && v <= 29):
        console.log("ottimo");
        break;
    case (v === 30):
        console.log("eccellente");
        break;
}