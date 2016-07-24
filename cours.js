function direBonjour() {
    console.log("Bonjour !");
}

console.log("Début du programme");
direBonjour();
console.log("Fin du programme");

function dirBonjour() {
    return "Bonjour !";
}

console.log("Début du programme");
var resultat = dirBonjour();
console.log(resultat);
console.log("Fin du programme");