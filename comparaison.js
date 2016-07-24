/* 
Exercice : comparer deux nombres
*/

var nbre1 = Number(prompt("Entrez un nombre :"));//récupère l'entrée utilisateur dans une variable de type int
var nbre2 = Number(prompt("Entrez un autre nombre :"));//récupère l'entrée utilisateur dans une variable de type int
if (nbre1 < nbre2){//Si nbre1 est plus petit que nbre2
    console.log(nbre1 + " est plus petit que " + nbre2);//la console affiche le contenu de la variable nbre1 + message + le contenu de la variable nbre2
}else if (nbre1 > nbre2){//Si nbre1 est plus grand que nbre2
    console.log(nbre1 + " est plus grand que " + nbre2);//la console affiche le contenu de la variable nbre1 + message + le contenu de la variable nbre2
}else{// équivaut a nbre1 === nbre 2
    console.log(nbre1 + " est égal à " + nbre2);//la console affiche le contenu de la variable nbre1 + message + le contenu de la variable nbre2
}

