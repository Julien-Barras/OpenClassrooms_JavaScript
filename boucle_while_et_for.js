/*
 *Choisir entre boucle For et boucle While
 */

//Comment choisir le type de boucle à utiliser lorsqu'on doit répéter des instructions dans un programme ?

//La boucle for a l'avantage d'intégrer la modification du compteur dans sa syntaxe, ce qui élimine le problème des boucles infinies. En revanche, son //utilisation implique que le nombre de tours de boucle soit connu à l'avance. Les scénarios où le nombre de tours ne peut pas être prévu à l'avance seront //plus simples à écrire avec un while.

/*
 * La Boucle While
 */

console.log("Début du programme");//affiche message dans la console lors de l'entrée de la boucle
var nombre = 1;//déclaration et instanciation de la variable nombre

while (nombre <= 5) {// Tant que le valeur de la variable nombre est inférieur ou égal à 5
    console.log(nombre);//la console affiche la valeur de la variable
    nombre++;//incremente la valeur de la variable nombre
}
console.log("Fin du programme");//affiche message dans la console lors de la sortie de la boucle

/*
 * La Boucle While - Fonctionnement
 */

while (condition) {
    // instructions exécutées tant que la condition est vérifiée
}

/*
 * La Boucle For
 */

var compteur;//déclaration de la variable compteur
for (compteur = 1; compteur <= 5; compteur++) {//instanciation de la variable compteur à 1 ; tant que la valeur de compteur est inf ou égal à 5 ; incrementation de la variable compteur
    console.log(compteur);//console affiche la valeur de compteur à chaque tour de boucle
}

/*
 * La Boucle For - Fonctionnement
 */

for (initialisation; condition; étape) {
    // instruction executées tant que la condition est vérifiée
}