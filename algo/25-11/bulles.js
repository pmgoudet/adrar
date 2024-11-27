// Le but est de trier un tableau nous-même (il faut mettre les éléments du plus petit au plus grand). Pour cela, on va procéder en plusieurs étapes :

// Étape 1 : écrire une fonction qui reçoit un tableau et un numéro de case (i). Son but est d'échanger les valeurs des cases i et i+1 si celles-ci ne sont pas dans le bon ordre.

let t = [4,7,15,5,6,50];
let t2 = [94, -13, 3, -22, 90, 85, 64, 23];


function inverser(tableau, i) {
    let n = tableau[i];
    if((tableau[i] > tableau[i+1])) {
        tableau[i] = tableau[i+1];
        tableau[i+1] = n;
    }
}

// Étape 2 : écrire une fonction qui reçoit un tableau et qui applique l'étape 1 sur toutes les cases successives (cases 0/1, cases 1/2, cases 2/3, ..., cases avant-dernière/dernière).


function tableOrdre (tableau) {
    for(let i=0; i<tableau.length-1; i++) {
        inverser(tableau, i)
    }
    return tableau;
}

console.log(tableOrdre (t));



// Étape 3 : écrire une fonction qui reçoit un tableau et qui le trie en appelant la fonction 2 autant de fois qu'il y a d'éléments dans le tableau.

function trie(tableau) {
    for (let i=0; i<tableau.length; i++) {
        tableOrdre (tableau)
    }
    return tableau;
}

console.log(trie(t));
console.log(trie(t2));

// Note : on peut visualiser cet algorithme sur cette image <https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/211162/a9b17b54-b6dd-1602-be04-6fc125676b7a.gif>.