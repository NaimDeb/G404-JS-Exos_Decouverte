// Exercice 5 :
// Demander à l’utilisateur deux nombres à virgule. Ne garder que la partie entière du premier .
// Les multiplier et afficher le résultat dans une boîte de dialogue.

let premierNombre = prompt("Donne moi un nombre a virgule")
let deuxiemeNombre = prompt("Donne moi un AUTRE nombre a virgule")


// On remplace la , par un point sinon ça bug
premierNombre = premierNombre.replace(',','.')
deuxiemeNombre = deuxiemeNombre.replace(',','.')



// On convertit le prompt en integer
premierNombre = Number(premierNombre)
deuxiemeNombre = Number(deuxiemeNombre)

alert(Math.round(premierNombre) + " multiplié par " + Math.round(deuxiemeNombre) + " = " + (Math.round(premierNombre) * Math.round(deuxiemeNombre)) )
