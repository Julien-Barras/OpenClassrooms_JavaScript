var chien = {
    nom: "Crockdur",
    race: "mâtin de Naples",
    taille: 75,
    
    // Renvoie la cri du chien
    aboyer: function () {
        var cri = "Grrr ! Grrr !";
        return cri;
    }

   
    
};

console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm");
console.log("Tiens, un chat ! " + chien.nom + " aboie : " + chien.aboyer());