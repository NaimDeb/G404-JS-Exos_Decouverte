// Exercice 5.6

// Ecrire un algorithme qui demande un nombre de départ, et qui calcule la somme des entiers jusqu’à ce nombre. Par exemple, si l’on entre 5, le programme doit calculer :

// 1 + 2 + 3 + 4 + 5 = 15

//     NB : on souhaite afficher uniquement le résultat, pas la décomposition du calcul.


let nombreDepart = Number(prompt("Donne un nombre de départ"))
let nombreFinal = 0


for (let i = 1 ; i <= nombreDepart ; i++){
    nombreFinal += i
}

alert(nombreFinal)