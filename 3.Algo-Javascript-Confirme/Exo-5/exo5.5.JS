// Exercice 5.5

// Ecrire un algorithme qui demande un nombre de départ, et qui ensuite écrit la table de multiplication de ce nombre, présentée comme suit (cas où l'utilisateur entre le nombre 7) :

// Table de 7 :
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// …
// 7 x 10 = 70

let nombre = prompt("Donne nombre de départ")

let message = " Table de multiplication de " + nombre + " : \n"

for (let i = 0 ; i < 10 ; i++) { message += i + " x " + nombre + " = " + i*nombre + "\n"}

console.log(message)