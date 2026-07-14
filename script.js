// Dichiariamo la variabile per il voto
let v = 29;

console.log(`--- METODO 1: if / else ---`);

// Metodo 1: if, else if, else
if (v < 18) {
    console.log("insufficiente");
} else if (v >= 18 && v < 21) {
    console.log("sufficiente");
} else if (v >= 21 && v < 24) {
    console.log("buono");
} else if (v >= 24 && v < 27) {
    console.log("distinto");
} else if (v >= 27 && v <= 29) {
    console.log("ottimo");
} else if (v === 30) {
    console.log("eccellente");
} else {
    //  caso di "errore" se il voto inserito non rientra tra 0 e 30
    console.log("Voto non valido");
}


console.log(`--- METODO 2: switch ---`);

// Metodo 2: switch 
switch (true) {
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
    default:
        console.log("Voto non valido");
        break;
}