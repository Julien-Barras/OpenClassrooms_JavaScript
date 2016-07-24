/*
Exercice : périmètre et aire d'un cercle
*/

// Renvoie le périmètre d'un cercle
function perimetre(rayon) {
  //  return 2 * 3.14 * rayon;
    return 2 * rayon * Math.PI;
}

// Renvoie l'aire d'un cercle
function aire (rayon){
    //return 3.14 * rayon * rayon;
    return Math.pow(rayon, 2) * Math.PI;
}

var reponseUser = Number(prompt("Entrez le rayon de votre cercle :"));
console.log("Son périmètre vaut " + perimetre(reponseUser));
console.log("Son aire vaut " + aire(reponseUser));