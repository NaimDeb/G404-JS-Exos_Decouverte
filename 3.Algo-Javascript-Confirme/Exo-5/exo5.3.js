// Exercice 5.3 (et 5.4 du coup)
// Ecrire un algorithme qui demande un nombre de départ, et qui ensuite affiche les dix nombres suivants. Par exemple, si l'utilisateur entre le nombre 17, le programme affichera les nombres de 18 à 27.
// Réécrire l'algorithme précédent, en utilisant cette fois l'instruction for

let number = Number(prompt("donne un nombre"))

for (let i = number+1; i <= number+10 ; i++) {
console.log(i)
}
