//Constructeur
var Film = {
    // Initialise le compte bancaire
    init: function (titre, annee, realisateur) {
        this.titre = titre;
        this.annee = annee;
        this.realisateur = realisateur;
    },
    decrire: function(){
    var description = this.titre + " (" + this.annee + ")" + ", " + this.realisateur;
    return description;
    } 
};

//Création d'objets
var film1 = Object.create(Film);
film1.init("Le loup de Wall Street", 2013, "Martin Scorsese");

var film2 = Object.create(Film);
film2.init("Vice-Versa", 2015, "Pete Docter");

var film3 = Object.create(Film);
film3.init("Babysitting", 2013, "Philippe Lacheau et Nicolas Benamou");

// Un tableau vide
var films = [];
//Ajoute dans le tableau l'objet ...
films.push(film1);
films.push(film2);
films.push(film3);

//Boucle sur le Tab films et affiche la description de chaqu'un
films.forEach(function (film) {
    console.log(film.decrire());
});