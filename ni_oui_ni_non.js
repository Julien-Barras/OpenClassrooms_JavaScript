/* 
Exercice : jeu du ni oui, ni non
*/


var reponseUser = prompt("Voulez-vous jouer au jeu du ni oui ni non ?");

while((reponseUser !== "oui") && (reponseUser !== "non")){
    reponseUser = prompt("Voulez-vous jouer au jeu du ni oui ni non ?");
}
console.log("Vous avez perdu !");


