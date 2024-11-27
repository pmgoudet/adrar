// Exercice divers_1 :	écrire une fonction qui retourne **la position** du plus grand élément d'un tableau.

function positionBiggest (tableau) {
    let numMax = tableau[0];
    let pos;
    for(i=0; i<tableau.length; i++) {
        if (tableau[i] > numMax) { 
            numMax = tableau[i];
            pos = i;
        }
    }console.log(pos);
}


// Exemple : positionBiggest([4,7,5,5,6]) retourne 1 car le plus grand est dans la case numéro 1

positionBiggest([4,7,15,5,6,50]);



// Exercice divers_2 : écrire une fonction qui fait la somme de tous les éléments d'un tableau.

function somme(tableau) {
    let somme = 0;
    for(i=0; i<tableau.length; i++) {
        somme += tableau[i];
    }
    return somme;
}

console.log('soma')
console.log( somme ([1,-2,7,60, -9]) );


// Exercice divers_3 : écrire une fonction qui retourne la somme des valeurs positives d'un tableau.

function sommeDesPositifs(tableau) {
    let somme = 0;
    for(i=0; i<tableau.length; i++) {
        if (tableau[i] > 0) {    
            somme += tableau[i];
        }
    }
    return somme;
}
console.log('soma positivos')
console.log( sommeDesPositifs([1,-2,7,60, -9]) );

// Exercice divers_4 : En utilisant les deux fonctions précédentes, écrire une fonction qui retourne la somme des valeurs négatives d'un tableau.

// function sommeDesNegatifs (tableau) {
//     let somme = 0;
//     for(i=0; i<tableau.length; i++) {
//         if (tableau[i] < 0) {    
//             somme += tableau[i];
//         }
//     }
//     console.log(somme);
// }

console.log('soma negativos')
function sommeDesNegatifs(tableau) {
    let soma = somme(tableau) - sommeDesPositifs(tableau);
    return soma;
}

console.log(sommeDesNegatifs ([1,-2,7,60, -9, -9, 5]));