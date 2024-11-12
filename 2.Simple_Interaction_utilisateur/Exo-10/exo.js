// Exercice 10 :

// Dans cet exercice, vous devez demander à l'utilisateur de saisir un mot. Vous devez ensuite afficher ce mot en utilisant une boucle pour afficher chaque lettre du mot sur une ligne différente. Par exemple, si l'utilisateur saisit "JavaScript", vous devez afficher :

// J

// a

// v

// a

// S

// c

// r

// i

// p

// t

let phrase = prompt("phrase")

for (let i = 0; i < phrase.length ; i++) {
    console.log(phrase.charAt(i))
    console.log(" ")
} 

