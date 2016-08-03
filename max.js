var valeurs = [11, 3, 7, 2, 9, 10];
var valeurActuelle = 0;
var result = 0;

//Boucle sur le Tab valeurs
valeurs.forEach(function (valeur) {
    valeurActuelle = valeur;
    
    //Si la valeurActuelle est plus grand que la valeur result
    if (valeurActuelle > result){
        //La valeur result récupère le contenu de la valeurActuelle
        result = valeurActuelle;
    }
});

//Affiche
console.log(result);