function direBonjour1() {
    console.log("Bonjour !");
}

direBonjour1();


function direBonjour2() {
    return "Bonjour !";
}

var resultat = direBonjour2();
console.log(resultat);

function direBonjour3() {
    return "Bonjour !";
}

console.log(direBonjour3()); // Affiche "Bonjour !"

function direBonjour4() {
    var message = "Bonjour !";
    return message;
}

console.log(direBonjour4());