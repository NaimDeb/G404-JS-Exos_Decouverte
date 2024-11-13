// Exercice 5.10
// Lire la suite des prix (en euros entiers et terminée par zéro) des achats d’un client. Calculer la somme qu’il doit, lire la somme qu’il paye, et simuler la remise de la monnaie en affichant les textes "10 Euros", "5 Euros" et "1 Euro" autant de fois qu’il y a de coupures de chaque sorte à rendre


const prixAchats = [5.00, 12.50, 20.00, 7.80, 1.50, 15.30, 9.90, 25.00, 18.70, 3.50, 10.00];



const billets = [
    { prix: "50 euros", centimes: 5000 },
    { prix: "20 euros", centimes: 2000 },
    { prix: "10 euros", centimes: 1000 },
    { prix: "5 euros", centimes: 500 },
    { prix: "2 euros", centimes: 200 },
    { prix: "1 euro", centimes: 100 },
    { prix: "50 centimes", centimes: 50 },
    { prix: "20 centimes", centimes: 20 },
    { prix: "10 centimes", centimes: 10 },
    { prix: "5 centimes", centimes: 5 },
    { prix: "1 centime", centimes: 1 }
]

let texte = ""
let somme = 0
prixAchats.forEach(prix => {
    somme += prix
    texte += Math.trunc(prix)
    
    if (prix < 2) {
        texte+= " Euro "
    } else {
        texte+= " Euros "
    }
    
    texte += " / "


});


console.log(texte)
// On met la somme en centimes 
let sommeEnCentimes = Math.ceil(somme*100)

console.log(`A rendre : ${somme} ou en centimes ${sommeEnCentimes}`)

billets.forEach(billet => {

    let nombreBillets = sommeEnCentimes / billet.centimes

    console.log(billet.prix.repeat(nombreBillets))

    sommeEnCentimes = sommeEnCentimes % billet.centimes

});