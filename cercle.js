var rayon = Number(prompt("Entrez le rayon d'un cercle :"));

var cercle = {
    // Renvoie le perimetre
    perimetre: function () {
        return 2 * Math.PI * rayon;
    },
    
    aire: function () {
        return Math.PI * rayon * rayon;
    }
    
};

console.log("Son périmètre vaut " + cercle.perimetre());
console.log("Son aire vaut " + cercle.aire());