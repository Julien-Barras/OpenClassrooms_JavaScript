/* 
 Activité : gestion des contacts
 */

//Constructeur
var Contact = {
    // Initialise le contact
    init: function (prenom, nom) {
        this.prenom = prenom;
        this.nom = nom;
    },
    //renvoi la description du contact
    decrire: function () {
        var description = "Nom : " + this.nom + ", prénom : " + this.prenom;
        return description;
    }
};

//Création d'objets
var contact1 = Object.create(Contact);
contact1.init("Carolle", "Lévisse");
var contact2 = Object.create(Contact);
contact2.init("Mélodie", "Nelsonne");

//Tableau vide
var repertoire = [];
//Insere les contacts dans le tableau
repertoire.push(contact1);
repertoire.push(contact2);

//Affiche
console.log("Bienvenue dans le gestionnaire des contacts !");

var cmdUser;

//Tant que l'entrée utilisateur est différentes de 0
while (cmdUser != 0) {
    //Affiche le choix des actions possibles
    console.log("-----------------------\nQue souhaitez vous faire ?\n1 : Lister les contacts\n2 : Ajouter un contact\n3 : Supprimer un contact\n0 : Quitter\n-----------------------")
    //Récupère la saisie utilisateur
    cmdUser = Number(prompt("Choississez une option :"));
    
    //Selon le choix de l'utilisateur
    switch (cmdUser) {
        case 1:
            console.log("Voici la liste de tous vos contacts :");
            //boucle sur le repertoire
            repertoire.forEach(function (contact) {
                //Affiche le répertoire via la fonction description de chaque objet
                console.log(contact.decrire());
            });
            break;

        case 2:
            //Récupère le nom et le prénom du Nouveau contact
            var prenomNouveauContact = prompt("Entrez le prénom du nouveau contact :");
            var nomNouveauContact = prompt("Entrez le nom du nouveau contact :");
            //Création du Nouveau contact
            var newContact = Object.create(Contact);
            newContact.init(prenomNouveauContact, nomNouveauContact);
            //Insere les contacts dans le tableau
            repertoire.push(newContact);
            console.log("Le nouveau contact a été ajouté");
            break;
            
        case 3:
            //Récupère le nom et le prénom du contact à supprimer
            var prenomSupprContact = prompt("Entrez le prénom EXACT du contact à supprimer :");
            var nomSupprContact = prompt("Entrez le nom EXACT du contact à supprimer :");
            //Création du contact à supprimer pr comparaison
            var newSupprContact = Object.create(Contact);
            newSupprContact.init(prenomSupprContact, nomSupprContact);
            //boucle sur le repertoire
            for (var i = 0; i < repertoire.length; i++) {
              //Si les descriptions correspondent  
              if (newSupprContact.decrire() == repertoire[i].decrire()){
                  //Supprime la valeur du répertoire
                  delete repertoire[i];
                  console.log("Le contact à bien été supprimer")
              }//if
                
            }//for
            break;                 
    }//switch
};//while





