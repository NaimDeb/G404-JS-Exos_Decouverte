// Exercice 7 :

// Demander à l’utilisateur sa pointure et son année de naissance. Créer une fonction qui fait les calculs suivants :

//     Multiplier la pointure par 2
//     Ajouter 5 au résultat
//     Multiplier le tout par 50
//     Soustraire l’année de naissance
//     Ajouter au tout 1766

// La fonction doit retourner le résultat. Tester avec votre date de naissance et votre pointure. Attention : n'utiliser qu'une seule variable de résultat.





function calculJSP () {
    let pointure = prompt("Donne moi ta pointure")
    let anneeNaissance = prompt("Donne moi ton année de naissance")
    alert((((pointure * 2) + 5) * 50) - anneeNaissance + 1766)

}

calculJSP()

