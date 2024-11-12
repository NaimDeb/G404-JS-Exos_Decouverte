// Exercice 6 : Compter les lettres

// Objectif : Pratiquer les boucles et la manipulation des chaînes de caractères.

//     Stockez une phrase dans une constante.
//     Compte combien de fois chaque lettre apparaît dans la phrase.
//     Affiche chaque lettre avec son nombre d’occurrences (par exemple, "a : 3 fois").


const phrase ="Les chaussettes de l'archiduchesse sont elles seches et archisèches ?"

// On transforme le texte abcde.. en un array ["a", "b" ,"c"].. 
const alphabet = "abcdefghijklmnopqrstuvwxyz".split('')

// On déclare nbLettre qu'on initialise a 0
let nbLettre = 0

// Pour chaque lettre de l'alphabet nommée lettre
alphabet.forEach((lettre) => {

    // Pour chaque lettre de la phrase nommée i
    for (let i = 0 ; i < phrase.length ; i++) {

    // On scanne chaque lettre de la phrase, et on incrémente nbLettre a chaque fois qu'on trouve la lettre
        if ( lettre.includes ( phrase.charAt(i) ) ) {
            nbLettre++

        }
    
    
}; 
// Pour éviter de spammer chaque lettre
if (nbLettre > 0) {
console.log("Il y a " + nbLettre + " lettres " + lettre);
nbLettre = 0;
}
})


// phraseCoupe.forEach((lettre) => {
    
// })

// On a une phrase, Pour chaque lettre de l'alphabet, 


// Compte le nb de fois Lettre A dans phrase
// If 
// Dire : "lettre A = 6 fois"


