// Exercice 5.9
// Réécrire l’algorithme précédent, mais cette fois-ci on ne connaît pas d’avance combien l’utilisateur souhaite saisir de nombres. La saisie des nombres s’arrête lorsque l’utilisateur entre un zéro.

let tableauNombres = [];
let i = 1

while (tableauNombres[tableauNombres.length-1] != 0){
    tableauNombres.push(prompt("Donne autant de nombres que tu veux, si tu veux arrêter, tape 0 \n Nombre " + (i)))
    i++
}


let nombrePlusGrand = 0

tableauNombres.forEach(element => {

    if (element >= nombrePlusGrand) {
        nombrePlusGrand = element
    }
    
});

console.log(`Le nombre le plus grand est le ${nombrePlusGrand} qui est a la position ${tableauNombres.indexOf(nombrePlusGrand)+1}` )

