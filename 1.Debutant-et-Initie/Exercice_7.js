// Exercice 7 : Filtrer les nombres positifs et négatifs

// Objectif : Utiliser des conditions pour trier des éléments dans deux groupes.

//     Crée un tableau contenant plusieurs nombres positifs et négatifs.
//     Utilise une boucle pour séparer les nombres positifs et les nombres négatifs dans deux nouveaux tableaux.
//     Affiche ces deux tableaux.


let tableauInitial = [42, -85, 97, -7, -30, 88, -56, 9, -61, 77, -94, 35, -14, 50, -100, 64, 20, -73, 11, 99, 0 ,787, 111111 ,-6676767676];
let tableauPositif = [];
let tableauNegatif = [];

tableauInitial.forEach((nombre => {
    if ( nombre < 0 ) { tableauNegatif.push(nombre) }
    else if ( nombre > 0 ) { tableauPositif.push(nombre) }
    else {console.log("On a un 0, on le met dans aucun des deux tableaux")}
}))

console.log("Tableau positif : " + tableauPositif)
console.log("Tableau Negatif : " + tableauNegatif)