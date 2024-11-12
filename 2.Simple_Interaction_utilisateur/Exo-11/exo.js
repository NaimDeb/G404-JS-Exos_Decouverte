// Exercice 11 :
// Dans cet exercice, vous devez demander à l'utilisateur de saisir un nombre compris entre 1 et 10. Vous devez ensuite afficher une boîte de dialogue contenant un message indiquant si le nombre saisi est supérieur, inférieur ou égal à 5. Par exemple, si l'utilisateur saisit 3, vous devez afficher "Le nombre saisi est inférieur à 5". Si l'utilisateur saisit 5, vous devez afficher "Le nombre saisi est égal à 5". Et si l'utilisateur saisit 7, vous devez afficher "Le nombre saisi est supérieur à 5".


let nombre = prompt("Donne un nombre cmopris entre 1 et 10")

if (nombre < 5) {alert("Nombre inférieur a 5")}
else if (nombre > 5) {alert("nb supérieur a 5")}
else alert("Nomnbre est 5")

