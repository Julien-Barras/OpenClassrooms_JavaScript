// Un tableau vide
var mots = [];

//Tant que motUser
while (motUser != "stop"){
    
    //Enregistrer l'entrée User dans une var
    var motUser = prompt("Entrez un mot :").toLowerCase();
    
    //Ajoute dans le tableau le contenu de la var motUser 
    mots.push(motUser);
    
}//while

//Boucle jusqu'a la dernière valeur du Tab mots
for (var i = 0; i < mots.length-1; i++) {
    //Affiche la valeur du tab correspondant a i, chaque tour
    console.log(mots[i]);
}




