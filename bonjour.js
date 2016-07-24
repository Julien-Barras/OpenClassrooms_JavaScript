/* 
Exercice : fonction bonjour avec saisies utilisateur
*/

// Renvoie un message de bienvenue
function direBonjour(prenom, nom) {
    var message = "Bonjour, " + prenom + " " + nom + " !";
    return message;
}

var prenomUser = prompt("Entrez votre prenom :");
var nomUser = prompt("Entrez votre nom :");

console.log(direBonjour(prenomUser, nomUser));

// TODO : faire saisir le prénom et le nom de l'utilisateur
// TODO : appeler direBonjour() avec les bons arguments et afficher son résultat



