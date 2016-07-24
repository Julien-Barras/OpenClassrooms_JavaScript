/*
Ma version
*/

var entreeUser = Number(prompt("Entrez un nombre entre 2 et 9:"));

while(entreeUser > 9 || entreeUser < 2){
    entreeUser = Number(prompt("Entrez un nombre entre 2 et 9:"));
    
}//fin while

var i;
    console.log("Voici la table de multiplication de " + entreeUser)
    
    for (i = 1 ; i <= 10; i++){
    var result = entreeUser * i;
    console.log(entreeUser + " x " + i + " = " + result);
        
}//fin for

/* 
Exercice : table de multiplication -Avec For
*/

var nombre = 0; // Valeur initiale permettant d'entrer dans la boucle
while ((nombre < 2) || (nombre > 9)) {
    nombre = Number(prompt("Entrez un nombre entre 2 et 9 : "));
}

console.log("Voici la table de multiplication de " + nombre);
for (var i = 1; i <= 10; i++) {
    console.log(nombre + " x " + i + " = " + (nombre * i));
}

/* 
Exercice : table de multiplication - Avec While
*/

var nombre = 0; // Valeur par défaut permettant d'entrer dans la boucle
while ((nombre < 2) || (nombre > 9)) {
    nombre = Number(prompt("Entrez un nombre entre 2 et 9 : "));
}

console.log("Voici la table de multiplication de " + nombre);
var i = 1;
while (i <= 10) {
    console.log(nombre + " x " + i + " = " + (nombre * i));
    i++;
}