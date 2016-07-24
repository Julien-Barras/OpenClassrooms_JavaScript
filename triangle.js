/* 
Exercice : construire et afficher un triangle de 7 lignes - Avec For
*/

var ligne = "";// Déclaration et instanciation de la variable ligne avec une chaine de caractère vide
for (var i = 1; i <= 7; i++) {// déclration varaible 1 à 1 ; tant que i est inf ou égal à 7; incrementation de i
    ligne = ligne + "#";//ajoute le contenu # à la variable ligne
    // Autre possibilité avec l'opérateur +=
    //ligne += "#";
    console.log(ligne);
}

/* 
Exercice : construire et afficher un triangle de 7 lignes - Avec While
*/

var ligne = "";
var i = 1;
while (i <= 7) {
    ligne = ligne + "#";
    // Autre possibilité avec l'opérateur +=
    //ligne += "#";
    console.log(ligne);
    i++;
}