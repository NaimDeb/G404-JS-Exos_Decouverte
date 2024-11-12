// Exercice 4 : Boucles combinées

// Créer un tableau avec les noms de tes amis. Utilise une boucle for pour parcourir le tableau et une boucle while à l'intérieur de la boucle for pour afficher chaque nom autant de fois que sa position dans le tableau (en commençant à 1).

// Exemple :

// jérémy
// hassan hassan
// vincent vincent vincent

const amis = [
    "Superman",
    "Batman",
    "Wonder Woman",
    "Spider-Man",
    "Iron Man",
    "Hulk",
    "Thor",
    "Black Panther",
    "Captain America",
    "Doctor Strange",
    "Flash",
    "Aquaman",
    "Green Lantern",
    "Black Widow",
    "Scarlet Witch",
    "Wolverine",
    "Deadpool",
    "Cyclops",
    "Storm",
    "Daredevil"
  ];


  for (let i = 0 ; i < amis.length ; i++)
  {
    let count = 0
    let texte = ""
    while (count <= i+1) {
        texte += amis[i]
        texte += " "
        count++
    }

    console.log(texte)
  }

