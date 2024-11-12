
// Exercice 5.11

// Écrire un algorithme qui permette de connaître ses chances de gagner au tiercé, quarté, quinté et autres impôts volontaires.

// On demande à l’utilisateur le nombre de chevaux partants, et le nombre de chevaux joués.

// Les deux messages affichés devront être :

// Dans l’ordre : une chance sur X de gagner
// Dans le désordre : une chance sur Y de gagner

// X et Y nous sont donnés par la formule suivante, si n est le nombre de chevaux partants et p le nombre de chevaux joués (on rappelle que le signe ! signifie "factorielle", comme dans l'exercice 5.6 ci-dessus) :

//     X = n! / (n - p)!
//     Y = n! / (p! * (n – p)!)

// NB : cet algorithme peut être écrit d’une manière simple, mais relativement peu performante.

// Ses performances peuvent être singulièrement augmentées par une petite astuce.

// Vous commencerez par écrire la manière la plus simple, puis vous identifierez le problème, et écrirez une deuxième version permettant de le résoudre.


let chevauxPartants = prompt("Nombre de chevaux partants : ")
let chevauxJoues = prompt("Nombre de chevaux joués : ")