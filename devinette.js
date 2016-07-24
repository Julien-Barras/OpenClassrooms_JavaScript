/* 
 Activité : jeu de devinette
 */

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
console.log("(La solution est " + solution + ")");

var reponseUser;
var tour;

//Tant que la valeur de la variable tour n'est pas supérieure ou égale à 7
for (tour = 1; tour <= 7; tour++) {
    console.log("Essai numéro " + tour);
    //repose la question à l'utilisateur et met à jour la valeur de la variable reponseUser
    reponseUser = Number(prompt("Devinez le nombre situé entre 1 et 100 :"));

    //si le contenu des deux variables sont identiques
    if (reponseUser === solution) {
        console.log("Bravo ! La solution était " + solution + "\nVous avez trouvé en " + tour + " essai(s)");
        //ferme la boucle
        break;

        //si la valeur de la variable reponseUser est plus petite que celle de solution     
    } else if (reponseUser < solution) {
        console.log(reponseUser + " est trop petit");
        //sinon    
    } else {
        console.log(reponseUser + " est trop grand");
    }
}//for

//si la valeur de tour est égale à 7
if (tour === 7 && reponseUser !== solution) {
    console.log("Vous avez perdu ... la solution était : " + solution);
}

console.log("Jeu fini, appuyer sur F5 pour recommencer");