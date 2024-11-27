// Le but de cet exercice est de répondre à quelques questions concernant mes derniers relevés de Smarties®.

// Dans une boîte de Smarties®, il y a des bonbons de 8 couleurs différentes : rose, rouge, orange, jaune, vert, bleu, violet, marron
// Dans ma première boîte, j'ai eu 3, 6, 7, 3, 6, 2, 2 et 1 bonbons de chaque couleur, respectivement
// Comment pourrais-je stocker cette information là en js ?
// Comment pourrais-je stocker toutes les informations du fichier smarties.data ?

let boites = [
    [3,6,7,3,6,2,2,1],
    [2,1,12,4,2,3,4,2],
    [3,4,8,7,4,0,1,3],
    [3,4,5,4,4,3,5,1],
    [2,4,6,3,3,2,5,4],
    [3,1,9,4,3,3,1,5],
    [2,2,6,5,5,2,1,6],
    [4,6,7,3,1,1,3,4],
    [6,4,4,5,1,0,4,5],
    [3,1,3,3,4,3,4,8],
    [4,3,6,4,2,3,6,2],
    [4,7,3,2,5,2,5,1],
    [1,0,13,6,2,0,5,2],
    [5,2,1,5,6,3,3,4],
    [2,4,3,4,7,3,2,4],
    [8,6,3,2,1,2,1,5],
    [6,4,3,4,4,0,3,5],
    [6,8,2,2,4,5,2,1],
    [3,6,2,5,5,2,3,3],
    [4,5,4,1,6,4,2,3],
    [2,6,2,3,4,2,6,4],
    [3,2,5,8,2,3,4,1],
    [3,2,3,3,6,5,3,4],
    [2,1,1,3,4,3,7,8],
    [2,3,2,5,2,3,6,6],
    [1,6,6,0,5,4,2,5],
    [2,2,6,2,3,4,4,6],
    [4,6,7,2,3,3,3,1],
    [3,5,0,9,1,6,3,2],
    [3,2,5,3,3,6,3,4],
    [4,3,4,0,6,5,4,3],
    [6,4,4,2,6,2,1,4],
    [6,2,2,2,5,5,4,3]
];


// Maintenant que j'ai ces données :

// Combien y a-t-il de Smarties® dans chaque boîte ?

function compterBoites (boites) {
    for (let i=0; i<boites.length; i++) {
        let soma = 0;
        for (let j=0; j<boites[i].length; j++) {
            soma += boites[i][j];
        }
        console.log(`La boîte ${i} contient ${soma} Smarties®`);
    }
}

//compterBoites (boites);
// réponse dans la console

// Quel est le nombre minimum de Smarties® dans une boîte ?
// 28

// Et le nombre maximum ?
// 30 

// Combien y a-t-il de Smarties® bleus en tout ?


function compterBleus (boites) {
    
    let bleus = 0;
    
    for (let i=0; i<boites.length; i++) {
        bleus += boites[i][5];
    }
    console.log(`Il y a ${bleus} Smarties® bleus en tout`);
}

compterBleus (boites);



// Pour chaque couleur, compter le nombre de Smarties® de cette couleur.

function compterTous (boites) {

    let couleursCompte = [0,0,0,0,0,0,0,0];
    
    for (let i=0; i<boites.length; i++) {
        for (let j=0; j<boites[i].length; j++) {
            couleursCompte[j] += boites[i][j];
        }
    }

    let couleurs = {
        rose: couleursCompte[0],
        rouge: couleursCompte[1],
        orange: couleursCompte[2],
        jaune: couleursCompte[3],
        vert: couleursCompte[4],
        bleu: couleursCompte[5],
        violet: couleursCompte[6],
        marron: couleursCompte[7]
    }

    console.log(couleurs);
}

compterTous (boites);

      
// Quelle est la couleur la plus présente, en tout ?
// c'est l'orange


// Quel est le nombre maximum de Smarties® d'une seule couleur, dans une boîte ?

function plusNombreux (boites) {
    let bigger = 0;
    for (let i=0; i<boites.length; i++) {
        for (let j=0; j<boites[i].length; j++) {
            if (boites[i][j] > bigger) {
                bigger = boites[i][j];
            }
        }
    }
    console.log(`Le nombre maximum de Smarties® d'une seule couleur dans une boîte est ${bigger}.`);
}

plusNombreux (boites);


// Dans combien de boîtes y' a-t-il 3 Smarties® bleues ?

function combienBoites(boites) {
    let compteur = 0;
    for (let i=0; i<boites.length; i++) {
        if (boites[i][5] == 3) {
            compteur++;
        }
    }
    console.log(`Il y a 3 Smarties® bleues dans ${compteur} boîtes.`);
}

combienBoites(boites);

// Dans combien de boîte une couleur est absente ?

function couleurAbsente (boites) {
    let compteur = 0;
    for (let i=0; i<boites.length; i++) {
        for (let j=0; j<boites[i].length; j++) {
            if (boites[i][j] == 0) {
                compteur++;
                break;
            }
        }
    }
    console.log(`Une couleur est absente dans ${compteur} boîtes.`);
}

couleurAbsente (boites);

// Dans combien de boîte les Smarties® oranges [2] sont-ils les plus nombreux ?

boites = [
    [3,6,7,3,6,2,2,1],
    [2,1,12,4,2,3,4,2],
    [3,4,8,7,4,0,1,3],
    [3,4,5,4,4,3,5,1],
    [2,4,6,3,3,2,5,4],
    [3,1,9,4,3,3,1,5],
    [2,2,6,5,5,2,1,6],
    [4,6,7,3,1,1,3,4],
    [6,4,4,5,1,0,4,5],
    [3,1,3,3,4,3,4,8],
    [4,3,6,4,2,3,6,2],
    [4,7,3,2,5,2,5,1],
    [1,0,13,6,2,0,5,2],
    [5,2,1,5,6,3,3,4],
    [2,4,3,4,7,3,2,4],
    [8,6,3,2,1,2,1,5],
    [6,4,3,4,4,0,3,5],
    [6,8,2,2,4,5,2,1],
    [3,6,2,5,5,2,3,3],
    [4,5,4,1,6,4,2,3],
    [2,6,2,3,4,2,6,4],
    [3,2,5,8,2,3,4,1],
    [3,2,3,3,6,5,3,4],
    [2,1,1,3,4,3,7,8],
    [2,3,2,5,2,3,6,6],
    [1,6,6,0,5,4,2,5],
    [2,2,6,2,3,4,4,6],
    [4,6,7,2,3,3,3,1],
    [3,5,0,9,1,6,3,2],
    [3,2,5,3,3,6,3,4],
    [4,3,4,0,6,5,4,3],
    [6,4,4,2,6,2,1,4],
    [6,2,2,2,5,5,4,3]
];

function orangeNombreux (boites) {
    let compteur = 0;
    for (let i=0; i<boites.length; i++) {
        let compteurNombreux = 0;
        for (let j=0; j<boites[i].length; j++) {
            if (boites[i][j] > compteurNombreux) {
                compteurNombreux = boites[i][j];
            }
        }
        if (compteurNombreux == boites[i][2]) {
            compteur++;
        }
    }
    console.log(`Les Smarties® oranges sont les plus nombreux dans ${compteur} boîtes.`);
}

orangeNombreux (boites);


