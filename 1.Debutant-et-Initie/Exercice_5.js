// Exercice 5 : Compteur de voyelles

// Objectif : Manipuler les chaînes de caractères et compter des éléments.

//     Dans une constante, stockez un mot.
//     La suite de votre algo va compter et afficher le nombre de voyelles dans le mot (a, e, i, o, u).


const nom = "anticonstitutionnellement";
const voyelles = ["a","e","i","o","u"];

console.log("Votre mot a " + nom.length + " lettres")

console.log("Les voyelles sont : ")

for (let i = 0 ; i < nom.length ; i++) {
    if ( voyelles.includes ( nom.charAt(i) ) )
        console.log(nom.charAt(i))
}


// Utilisation de Split
console.log("Avec split")

let nomCoupe = nom.split('')

nomCoupe.forEach( (lettre) => {if (lettre == "a" | lettre == "e" | lettre == "i" | lettre == "o" | lettre == "u") { console.log(lettre)} })