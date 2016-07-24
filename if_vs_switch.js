// ------ IF VS SWITCH -----

/*
*version if
*/
//var meteo = prompt("Quel temps fait-il dehors ?");//récupère l'entrée utilisateur dans une variable de type string nomméé meteo
//if (meteo === "soleil") {//Si le contenu de la variable meteo est égal à la chaine de charactères "soleil"
//    console.log("Sortez en t-shirt.");//la console affiche message
//} else if (meteo === "vent") {// sinon si le contenu de la variable meteo est égal à la chaine de charactères "vent"
//    console.log("Sortez en pull.");//la console affiche message
//} else if (meteo === "pluie") {// sinon si le contenu de la variable meteo est égal à la chaine de charactères "pluie"
//    console.log("Sortez en blouson.");//la console affiche message
//} else if (meteo === "neige") {// sinon si le contenu de la variable meteo est égal à la chaine de charactères "neige"
//    console.log("Restez au chaud à la maison.");//la console affiche message
//} else {// sinon 
//    console.log("Je n'ai pas compris !");//la console affiche message
//}

/*
*Version switch
*/
var meteo = prompt("Quel temps fait-il dehors ?");
switch (meteo) {
case "soleil":
    console.log("Sortez en t-shirt.");
    break;
case "vent":
    console.log("Sortez en pull.");
    break;
case "pluie":
    console.log("Sortez en blouson.");
    break;
case "neige":
    console.log("Restez au chaud à la maison.");
    break;
default:
    console.log("Je n'ai pas compris !");
}

/*
*Fonctionnement version switch
*/
switch (expression) {
case valeur1:
    // instructions exécutées quand expression vaut valeur1
    break;
case valeur2:
    // instructions exécutées quand expression vaut valeur2
    break;
default:
    // instructions exécutées quand aucune des valeurs ne correspond
}