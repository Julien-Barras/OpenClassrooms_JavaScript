var valeurs = [11, 3, 7, 2, 9, 10];
var somme = 0;

//Boucle sur le Tab valeurs
valeurs.forEach(function (valeur) {
    //A chaque tour ajour la valeur à la somme
    somme = somme + valeur;
});

//Affiche la somme
console.log("La somme des éléments vaut " + somme);