//Tableau de String
var mousquetaires = ["Athos", "Porthos", "Aramis"];

//Affiche
console.log("Voici les trois mousquetaires :")
//Boucle jusqu'a la dernière valeur du Tab
for (var i = 0; i < mousquetaires.length; i++) {
    //Affiche la valeur du tab correspondant a i, chaque tour
    console.log(mousquetaires[i]);
}

//Ajoute au tableau le mousquetaire d'Artagnan
mousquetaires.push("D'Artagnan");

//Affiche
console.log("A présent, ils sont quatre !");

//Boucle sur le Tab mousquetaires
mousquetaires.forEach(function (mousquetaire) {
    //Affiche la valeur du tab correspondant, chaque tour
    console.log(mousquetaire);
});