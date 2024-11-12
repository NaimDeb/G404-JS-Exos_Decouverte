// Exercice 6 :
// Dans un fichier séparé, créer une fonction permettant d’afficher le reste de la division de deux nombres. L’appeler depuis le fichier html.

function resteDivision() {
  let diviseur = document.getElementById("firstNumber").value;
  let dividende = document.getElementById("secondNumber").value;

  alert(dividende + "\n" + diviseur + "\n" + (dividende % diviseur));
}

let bouton = document
  .getElementById("submit")
  .addEventListener("click", resteDivision);
