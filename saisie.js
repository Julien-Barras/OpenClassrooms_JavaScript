var nbreUser = Number(prompt("Entrez un chiffre entre 50 et 100 : "));

while (nbreUser < 50 || nbreUser > 100){// Tant que la valeur de nbreUser est plus petite que 50 et plus grande que 100
    nbreUser = Number(prompt("Entrez un chiffre entre 50 et 100 : "));
}

if(nbreUser >= 50 && nbreUser <= 100){
        alert("Bravo !");
    }