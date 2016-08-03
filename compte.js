var compte = {
    titulaire: "Alex",
    solde: 0,
    crediter: function (montant) {
        this.solde = this.solde + montant;
    },
    debiter: function (montant) {
        this.solde = this.solde - montant;
    },
    decrire: function () {
        var reponse = "Titulaire : " + this.titulaire + ", solde : " + this.solde + " euros";
        return reponse;
    }
};

console.log(compte.decrire());
var credit = Number(prompt("Entrez le montant à créditer :"));
compte.crediter(credit);
var debit = Number(prompt("Entrez le montant à débiter :"));
compte.debiter(debit);
console.log(compte.decrire());