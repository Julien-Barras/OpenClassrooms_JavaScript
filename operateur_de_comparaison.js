//-------- Opérateurs de comparaison en JavaScript ------
// Egal à : ===
// Différent de : !==
// Infrieur à : <
// Supérieur à : >
// Inférieur ou égal à : <=
// Supérieur ou égal à : >=

// Opérateur Logique Et : &&
// Opérateur Logique Ou : 

var nombre = Number(prompt("Entrez un nombre :"));//récupère l'entrée utilisateur dans une variable de type nombre
if (nombre > 0) {//si le contenu de la variable nombre est supérieur à 0
    console.log(nombre + " est positif");//la console affiche est positif
}
else if (nombre < 0){//sinon si le contenu de la variable nombre est inférieur à 0
    console.log(nombre + " est négatif ");//la console affiche le contenu de la variable nombre + est négatif
}
else{//sinon (équivaut à nombre === 0)
    console.log(nombre + " est nul");// la console affiche le contenu de la variable nombre + message
}

/*
*L'opérateur logique ET-&&
*/
if (nombre >= 0 && nombre <= 100) {//Si le contenu de la variable nombre est supérieur ou égale à 0 et inférieur ou égale à 100
    console.log(nombre + " est compris entre 0 et 100");// la console affiche le contenu de la variable nombre + message
}

/*
*Table des vérité de l'opérateur ET-&&
*/
console.log(true && true); // Affiche true
console.log(true && false); // Affiche false
console.log(false && true); // Affiche false
console.log(false && false); // Affiche false

/*
*L'opérateur logique OU-||
*/

if (nombre>0 || nombre<100 ){//Si le contenu de la variable nombre est inférieur à ou supéreure à 100
    console.log(nombre + " n'est pas compris entre 0 et 100");//la console affiche le contenu de la variable nombre + message
}

/*
*Table des vérité de l'opérateur OU-||
*/
console.log(true || true); // Affiche true
console.log(true || false); // Affiche true
console.log(false || true); // Affiche true
console.log(false || false); // Affiche false

/*
*L'opérateur logique NON-!
*/
if (!(nombre >= 100)) {//Si le contenu de la varaiable nombre n'est pas supérieur à 100
    console.log(nombre + " est inférieur à 100");//la console affiche le contenu de la variable nombre + message
}

if (!(nombre <= 100)) {//Si le contenu de la varaiable nombre n'est pas inférieur à 100
    console.log(nombre + " est supérieur à 100");//la console affiche le contenu de la variable nombre + message
}else{//sinon (équivaut à nombre === 0)
    console.log(nombre + " est égal à 100");//la console affiche le contenu de la variable nombre + message
}

/*
*Table des vérité de l'opérateur NON-!
*/
console.log(!true); // Affiche false
console.log(!false); // Affiche true