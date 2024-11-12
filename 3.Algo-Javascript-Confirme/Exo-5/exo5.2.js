// Exercice 5.2
// Ecrire un algorithme qui demande un nombre compris entre 10 et 20, jusqu’à ce que la réponse convienne. En cas de réponse supérieure à 20, on fera apparaître un message : « Plus petit ! », et inversement, « Plus grand ! » si le nombre est inférieur à 10.

let vraiNombre = 16
let nombreDonne

while (nombreDonne !== vraiNombre) {
    nombreDonne = prompt("Donne un nombre de 10 a 20")

    if (nombreDonne < 10) {alert("Plus grand")}
    if (nombreDonne > 20) {alert("Plus petit")}

    if (nombreDonne == vraiNombre )
    {alert("GG")
    break
    }
}