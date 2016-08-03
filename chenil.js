var Chien = {
    // initialise le chien
    init: function (nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },
    // Renvoie l'aboiement du chien
    aboyer: function () {
        var aboiement = "Whoua ! Whoua !";
        if (this.taille < 25) {
            aboiement = "Kaii ! Kaii !";
        } else if (this.taille > 60) {
            aboiement = "Grrr ! Grrr !";
        }
        return aboiement;
    },
    decrire: function(){
    var description = this.nom + " est un " + this.race + " mesurant " + this.taille + " cm. Il aboie : " + this.aboyer();
    return description;
    }
};

//Création d'objets
var chien1 = Object.create(Chien);
chien1.init("Chips", "Boxer", 61);

var chien2 = Object.create(Chien);
chien2.init("Legend", "Chow-Chow", 56);

var chien3 = Object.create(Chien);
chien3.init("Cricket", "Chihuahua", 22);

// Un tableau vide
var chenil = [];
//Ajoute dans le tableau l'objet ...
chenil.push(chien1);
chenil.push(chien2);
chenil.push(chien3);

console.log("Le chenil hégerge " + chenil.length + " chien(s) :");
//Boucle sur le Tab films et affiche la description de chaqu'un
chenil.forEach(function (chien) {
    console.log(chien.decrire());
});