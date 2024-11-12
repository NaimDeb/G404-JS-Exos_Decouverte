// Exercice 1 : Boucle for

// Créer une boucle for qui génère une pyramide de * dans la console. Par exemple, pour une pyramide de 5 étages, le résultat serait :

// *
// **
// ***
// ****
// *****


let hauteur = 5

for (let i = 1 ; i <= hauteur ; i++){
    console.log("*".repeat(i))
}