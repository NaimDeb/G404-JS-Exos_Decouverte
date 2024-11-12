// Exercice 8 : Trouver le nombre maximum

// Objectif : Utiliser des boucles et des conditions pour trouver une valeur.

//     Saisissez une liste de 5 nombres.
//     Parcoure cette liste pour déterminer et afficher le plus grand nombre.


let tableau = [8, 93, 18, 19, 113, 49];
let nbGrand = 0

tableau.forEach((nombre) => {
    if (nombre > nbGrand) { nbGrand = nombre }
})

console.log ("Le nombre le plus grand est : " +nbGrand)