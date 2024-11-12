// Exercice 9 : Inverser une chaîne de caractères

// Objectif : Utiliser les boucles et les manipulations de chaînes.

//     Saisissez un mot.
//     Affiche ce mot en inversant l'ordre des lettres (par exemple, "bonjour" deviendrait "ruojnob").


let mot = "Bonjour"
let motInverse = ""

for (i = mot.length ; i >= 0 ; i--) {
    motInverse += mot.charAt(i)
}

console.log(motInverse)