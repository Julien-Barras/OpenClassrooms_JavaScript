var jourUtilisateur = prompt("Saissisez le jour de la semaine");

switch(jourUtilisateur){
    case "lundi":
        console.log("Demain nous serons, Mardi");
    break;
    
    case "mardi":
        console.log("Demain nous serons, Mercredi");
    break;
        
    case "mercredi":
        console.log("Demain nous serons, Jeudi");
    break;
        
    case "jeudi":
        console.log("Demain nous serons, Vendredi");
    break;    
        
    case "vendredi":
        console.log("Demain nous serons, Samedi");
    break;  
        
    case "samedi":
        console.log("Demain nous serons, Dimanche");
    break; 
        
    case "dimanche":
        console.log("Demain nous serons, Lundi");
    break; 
        
    default:
        console.log("Désolé je n'ai pas compris")
}        
