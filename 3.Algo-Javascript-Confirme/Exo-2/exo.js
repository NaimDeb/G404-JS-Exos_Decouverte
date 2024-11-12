// Exercice 2 : Boucle foreach

// Créer un tableau avec les noms de tes super-héros préférés. Utiliser une boucle foreach pour afficher une phrase pour chaque super-héros, par exemple "Je suis fan de [nom du super-héros]". Le résultat :

// Je suis fan de Spiderman
// Je suis fan de Captain America
// Je suis fan de Wolverine
// Je suis fan de Superman
// ...


const superHeroes = [
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

  superHeroes.forEach((hero) => console.log("Je suis fan de " + hero))