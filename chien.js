var Chien = {
    // Initialise le personnage
    initPet: function (nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },
    // permet au chien d'aboyer
    aboyer: function () {
        if (this.taille > 35) {
            return "WOUF ! WOUF !";
        } else {
            return "ouaf ! ouaf !"
        }
    }
};

var Pet = Object.create(Chien);
// Initialise le joueur
Pet.initPet = function (nom, race, taille) {
    this.initPet(nom, race, taille);
};

var crokdur = Object.create(Chien);
crokdur.initPet("Crokdur", "mâtin de Naples", 75);
console.log(crokdur.nom + " est un " + crokdur.race + " mesurant " + crokdur.taille + " cm");
console.log("Tiens, un chat ! " + crokdur.nom + " aboie : " + crokdur.aboyer());

var pupuce = Object.create(Chien);
pupuce.initPet("Pupuce", "bichon", 22);
console.log(pupuce.nom + " est un " + pupuce.race + " mesurant " + pupuce.taille + " cm");
console.log("Tiens, un chat ! " + pupuce.nom + " aboie : " + pupuce.aboyer());


