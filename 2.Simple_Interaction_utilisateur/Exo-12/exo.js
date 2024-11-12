// Exercice 12 :
// Dans cet exercice, vous devez créer une fonction qui prend en paramètre un nombre et qui retourne le carré de ce nombre. Vous devez ensuite demander à l'utilisateur de saisir un nombre, utiliser votre fonction pour calculer son carré, et afficher le résultat dans une boîte de dialogue. Par exemple, si l'utilisateur saisit 5, vous devez afficher "Le carré de 5 est 25".


function auCarre(nombre) { 
    alert("Le carré de " + nombre + " est " + (nombre*nombre))
}

auCarre(prompt("Donne ton nombre"))