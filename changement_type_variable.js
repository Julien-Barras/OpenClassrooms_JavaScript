var a = 3.14; 
console.log(a)

var b = 0; // b contient la valeur 0
b += 1; // b contient la valeur 1
b++; // b contient la valeur 2
console.log(b); // Affiche 2

var c = "cinq" * 2;
console.log(c); // Affiche NaN

var d = "5";
console.log(d + 1); // Concaténation : affiche la chaîne "51"
d = Number("5");
console.log(d + 1); // Addition numérique : affiche le nombre 6

var e = 5;
console.log(e + 1); // Addition numétique : affiche le nombre 6
e = String(5);
console.log(e +1); // Concaténation : affiche la chaîne "51"