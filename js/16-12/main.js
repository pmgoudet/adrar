// Ex 1

// console.log('Exo1');
// let nom = 'Pedro';
// let age = 36;
// let phrase = "Bonjour " + nom + " tu as " + age + " ans aujourd'hui, c'est la fiesta !";
// console.log(phrase);


// Ex 2

// console.log('Exo2');

// let nom = 'Ronaldinho';
// console.log(nom[nom.length-1]);
// console.log("La dernière lettre de " + nom + " est '" + (nom[nom.length-1]) + "'");


// Ex 3

// console.log('Exo3');

// let prenom = 'Pedro';
// let nom = 'Goudet';

// let phrase = [nom, prenom, nom[0], prenom[0]];
// let phrase2 = [nom, prenom, nom[0] + prenom[0]];

// console.log(phrase);
// console.log(phrase2);


// Ex 4

// console.log('Exo4');


// function moyenne(noteA, noteB) {
//     return (noteA + noteB) / 2;
// }

// console.log(moyenne(10, 20));


// Ex 5

// console.log('Exo5');

// function bacNote([fra, mat, philo]) {
//     note = (fra + mat + philo)/3;
//     if (note >= 15) {
//         return note.toFixed(1) + ": très bien!";
//     } else if (note >=10) {
//         return note.toFixed(1) + ": assez bien.";
//     } else {
//         return note.toFixed(1) + ": refus";
//     }
// }

// console.log(bacNote([18, 18, 4]));



// Ex 6 ----------------        OBJETOS

// console.log('Exo6');

// let batman = {
//     "hauteur": 1.50,
//     "poids": 90,
//     "couleur.yeux": "bleu",
//     "faiblesse": ["travail", "ménage", "fete-des-peres"]
// };

// console.log(batman.faiblesse);
// console.log(batman.poids);
// console.log(batman["hauteur"]);

// batman.enemis = ["joker"];
// batman.enemis.push("penguin");

// console.log(batman);

// delete batman.enemis;

// console.log(batman);

// console.log(batman.hasOwnProperty('enemis'));
// console.log(batman.hasOwnProperty('poids'));

// batman.amis = {
//     "Majordome": "Alfred",
//     "Partenaire": "Robin"
// };

// console.log(batman);





// // Ex 7 ----------------


// console.log('Exo7');

// let tableau = {
//     titre: "Guernica",
//     prix: 543000000,
//     artiste: "Picasso",
// }

// let livre = {
//     titre: "Pour qui Sonne le Glas",
//     prix: 10,
//     artiste: "Ernest Hemingway"
// }

// let cd = {
//     titre: "The Seeds of Love",
//     prix: 28,
//     artiste: "Tears for Fears"
// }

// tableau.pays = "Espagne";

// delete livre.prix;

// console.log(cd.hasOwnProperty('artiste'));
// console.log(cd.hasOwnProperty('mort'));
// console.log(tableau, livre, cd);



// // Ex 8 ----------------


// // console.log('Exo8');

// let i=0;
// let dessin = [];

// while (i < 10) {
//     i++;
//     dessin.push('#');
//     console.log(dessin);
// }

// let dessin2 = [];

// for (i=10; i > 0; i-=2) {
//     dessin2.push('#');
//     console.log(dessin2);
// }


// Ex 9

// console.log('Exo9');

// let notes = [10,20,20,10,14,11,20,19];

// function moyenne(array) {
//     let note = 0;
//     for (i=0; i<array.length; i++) {
//         note += array[i];
//     }
//     note = note / array.length;
//     return note.toFixed(1);
// }

// console.log(moyenne(notes));


// Ex 10


// console.log('Exo10');

// let equipe = "Corinthians";
// let adversaire = "Chelsea";
// let jogador = "Guerrero";

// console.log(`l'équipe ${equipe} a défoncé le petit ${adversaire} en 2012 avec le but de ${jogador}. Champions du monde, enfin.`)



// Ex 11

console.log('Exo11');

let btnArrow = document.querySelector('.arrow')
let btnAnonyme = document.querySelector('.anon')
let btnNormale = document.querySelector('.norm')

btnArrow.addEventListener('click', () => {
    console.log("C'est une arrow function");
})

btnAnonyme.addEventListener('click', function() {
    console.log("C'est une fonction anonyme");
})

btnNormale.addEventListener('click', fonctionNormale);

function fonctionNormale() {
    console.log("C'est une fonction normale");
}
