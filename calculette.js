/* 
Exercice : fonction calculatrice
*/

// Renvoie le résultat d'un calcul
function calculer(operandeGauche, operation, operandeDroite) {
    //Variable qui contiendra notre résultat
    var resultat;
    //si 
    switch (operation) {
    case "+":
        resultat = operandeGauche + operandeDroite;
        break;
    case "-":
        resultat = operandeGauche - operandeDroite;
        break;
    case "*":
        resultat = operandeGauche * operandeDroite;
        break;
    case "/":
        resultat = operandeGauche / operandeDroite;
        break;
    }
    return resultat;
}

console.log(calculer(4, "+", 6)); // Doit afficher 10
console.log(calculer(4, "-", 6)); // Doit afficher -2
console.log(calculer(2, "*", 0)); // Doit afficher 0
console.log(calculer(12, "/", 0)); // Doit afficher Infinity