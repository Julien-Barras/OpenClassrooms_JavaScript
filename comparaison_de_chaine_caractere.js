var chaine = "azerty";
console.log(chaine === "azerty"); // Affiche true
console.log(chaine === "qwerty"); // Affiche false

console.log("Azerty" === "azerty"); // Affiche false à cause du A majuscule

var valeurSaisie = "Quitter";
console.log(valeurSaisie === "quitter"); // Affiche false à cause du Q majuscule
//utilise la méthode toLowerCase avant de comparer les deux chaines de caratères
console.log(valeurSaisie.toLowerCase() === "quitter"); // Affiche true