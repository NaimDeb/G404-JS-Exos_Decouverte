// Exercice 5.8

// Ecrire un algorithme qui demande successivement 20 nombres à l’utilisateur, et qui lui dise ensuite quel était le plus grand parmi ces 20 nombres :

// Entrez le nombre numéro 1 : 12
// Entrez le nombre numéro 2 : 14
// ...
// Entrez le nombre numéro 20 : 6
// Le plus grand de ces nombres est : 14

// Modifiez ensuite l’algorithme pour que le programme affiche de surcroît en quelle position avait été saisie ce nombre :

// C’était le nombre numéro 2





// let tableauNombres = [];

// for (let i = 0 ; i < 20 ; i++){
//     tableauNombres.push(prompt("Tu dois donner 20 nombres \n Nombre " + (i+1)))

// }

const tableauNombres = [300, 7, 12, 18, 21, 5, 9, 14, 27, 33, 42, 6, 8, 19, 25, 31, 44, 50, 11, 15];



let nombrePlusGrand = 0

tableauNombres.forEach(element => {

    if (element >= nombrePlusGrand) {
        nombrePlusGrand = element
    }
    
});

console.log(`Le nombre le plus grand est le ${nombrePlusGrand} qui est a la position ${tableauNombres.indexOf(nombrePlusGrand)+1}` )

