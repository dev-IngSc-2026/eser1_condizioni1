let v = 29;

console.log("--- SOLUZIONE CON IF / ELSE ---");

// Sfruttiamo il funzionamento "a cascata" degli if/else
if (v < 0 || v > 30) {
    console.log("voto non valido");
} else if (v < 18) {
    console.log("insufficiente");
} else if (v < 21) {
    console.log("sufficiente");
} else if (v < 24) {
    console.log("buono");
} else if (v < 27) {
    console.log("distinto");
} else if (v <= 29) {
    console.log("ottimo");
} else if (v === 30) {
    console.log("eccellente");
}


console.log("--- SOLUZIONE CON SWITCH ---");

// Usiamo switch(true) che è il metodo classico per usare 
// operatori di disuguaglianza (<, >) dentro i "case"
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