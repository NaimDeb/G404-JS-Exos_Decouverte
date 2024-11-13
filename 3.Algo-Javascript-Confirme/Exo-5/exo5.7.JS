// Exercice 5.7

// Écrire un algorithme qui demande un nombre de départ, et qui calcule sa factorielle.

//     NB : la factorielle de 8, notée 8!, vaut 1 x 2 x 3 x 4 x 5 x 6 x 7 x 8


let nombreDepart = Number(prompt("Donne un nombre de départ"))

function factorielle(num) {
    let numfinal = num
    for (let i = num-1 ; i > 0 ; i--)
    {
        numfinal = numfinal * i
    }
    return numfinal
    }

alert(factorielle(nombreDepart))