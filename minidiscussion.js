var prenom = prompt("Entrez votre prénom :");//affiche la popup avec une boite de dialogue et récupère dans une variable nommée prenom l'entrée utilisateur
var nom = prompt("Entrez votre nom :");//affiche la popup avec une boite de dialogue et récupère dans une variable nommée nom l'entrée utilisateur
alert("Bonjour, " + prenom + " " + nom);//affiche une popup avec message + le contenu de la variable prenom + un espace + le contenu de la varaible nom

var chiffre1 = prompt(prenom + " Ecrit un nombre");//affiche une popup avec boite de dialogue et récupère dans une variable l'entrée utilisateur
var chiffre2 = prompt(prenom + " Ecrit un autre nombre");//affiche une popup avec boite de dialogue et récupère dans une variable l'entrée utilisateur

var bonneReponse = Number(chiffre1) + Number(chiffre2);//calcule le résultat du contenu des deux variable en utilisant une convertion explicite

var reponse = prompt(prenom + " Combien font l'addition des tes deux nombres")//affiche une popup avec boite de dialogue et récupère dans une variable l'entrée utilisateur

if(reponse == bonneReponse){// si le contenu de la variable réponse est identique à celui de la variable bonneReponse alors
    alert("Félicitation !")//affiche une popup avec message
    
}else{//sinon
    alert("Et non ! c'est " + bonneReponse + " loupé!")//affiche un message avec le contenu de la varaible bonneReponse
}

