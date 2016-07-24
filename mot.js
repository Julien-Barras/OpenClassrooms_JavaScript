/*
 Exercice : analyse d'un mot
*/

function compterNbVoyelles(mot) {
    var nbVoyelles = 0;
    for (var i = 0; i < mot.length; i++) {
        var lettre = mot[i].toLowerCase();
        if ((lettre === 'a') || (lettre === 'e') || (lettre === 'i') ||
            (lettre === 'o') || (lettre === 'u') || (lettre === 'y')) {
            nbVoyelles++;
        }
    }
    return nbVoyelles;
}

function inverser(mot) {
    var motInverse = "";

    // Solution 1 : ajouter chaque lettre au début du mot inversé
    for (var i = 0; i < mot.length; i++) {
        motInverse = mot[i] + motInverse;
    }

    // Solution 2 : parcourir le mot de la fin vers le début
    /*for (var i = mot.length - 1; i >= 0; i--) {
        motInverse = motInverse + mot[i];
    }*/
    
    if (motInverse === mot){
        motInverse = motInverse + "\n" + mot + " est un palindrome";
    }else{
        motInverse = motInverse + "\n" + mot + " n'est pas un palindrome";
    }

    return motInverse;
}

function convertirEnLeetSpeak(mot){
var lettre = ["a", "b", "e", "l", "o", "s"];
var chiffre = ["4", "8", "3", "1", "0", "5"];
var resultat = "";

for (var i = 0 ; i < mot.length; i++){
    var lettreMotActuelle = mot[i];
    
    for (var l = 0; l < lettre.length; l++){
        var lettreTabActuelle = lettre[l];
        
        if (lettreMotActuelle.toUpperCase() === lettreTabActuelle.toUpperCase()){
            resultat = resultat + chiffre[l];
            break;
        }//if
    }//for lettre.length
    if (lettreMotActuelle.toUpperCase() != lettreTabActuelle.toUpperCase()){
        resultat = resultat + mot[i];
    }//if
}//for mot.length
return resultat;

}//function LeetSpeak

var motUser = prompt("Entrez un mot :");
var longueurMot = motUser.length;
console.log("Votre mot contient " + motUser.length + " lettre");
console.log("Il s'écrit en minuscule : " + motUser.toLowerCase());
console.log("Il s'écrit en majuscule : " + motUser.toUpperCase());
var nbVoyelles = compterNbVoyelles(motUser);
console.log("Il contient " + nbVoyelles + " voyelle(s) et " + (longueurMot - nbVoyelles) + " consonne(s)");
console.log("Il s'écrit à l'envers : " + inverser(motUser));
console.log("Il s'écrit en LeetSpeak : " + convertirEnLeetSpeak(motUser));