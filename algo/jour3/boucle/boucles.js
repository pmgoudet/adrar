// Exercice 1 : écrire 50 fois "Bonjour" dans la console.
console.log("Exercice 1");
for(let i = 0 ; i < 50 ; i++) {
	console.log("Bonjour");
}

// Exercice 2 : écrire dans la console :
// A
// B
// A
// B
// A
// B
// A
// B
// A
// B


console.log("Exercice 2");
for(let i = 0 ; i < 5 ; i++) {
	console.log("A");
	console.log("B");
}

// TODO

// Exercice 3 : écrire dans la console :
// A
// A
// A
// A
// A
// B
// A
// A
// A
// A
// A
// B
// A
// A
// A
// A
// A
// B
console.log("Exercice 3");
for(let i = 0 ; i < 3 ; i++) {
    for(let i = 0 ; i < 5 ; i++) {
        console.log("A");
    }
    console.log("B");
}
// TODO

// Exercice 4 : écrire dans la console :
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
console.log("Exercice 4");
for(let i = 0 ; i < 10 ; i++) {
    console.log(i);
}



// TODO

// Exercice 5 : écrire dans la console :
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
console.log("Exercice 5");
for(let i = 3 ; i < 13 ; i++) {
    console.log(i);
}

// TODO

// Exerice 6 : écrire dans la console :
// 0
// 1
// 2
// 3
// 0
// 1
// 2
// 3
// 0
// 1
console.log("Exercice 6");

for(let i = 0 ; i < 10 ; i++) {
    console.log(i%4);
}


// TODO

// Exercice 7 : écrire dans la console :
// 0
// 1
// 2
// 3
// 4
// A
// A
// A
// 8
// 9
console.log("Exercice 7");

for(let i = 0 ; i < 10 ; i++) {
    if(i>=5 && i<=7) {
        console.log('A');
    } else {
        console.log(i);
    }
}


// TODO

// Exercice 8 : écrire dans la console :
// 100
// 1
// 2
// 103
// 4
// 5
// 106
// 7
// 8
// 109
console.log("Exercice 8");

for(let i = 0 ; i < 10 ; i++) {
    if(i%3 == 0) {
        console.log(100 + i);
    } else {
        console.log(i);
    }
}



// TODO

// Exercice 9 : écrire dans la console :
// 0
// 101
// 202
// 3
// 104
// 205
// 6
// 107
// 208
// 9
console.log("Exercice 9");

for(let i = 0 ; i < 10 ; i++) {
    if(i%3 == 1) {
        console.log(100 + i);
    } else if(i%3 == 2) {
        console.log(200 + i);
    } else {
        console.log(i);
    }
}

// TODO

// Exercice 10 : écrire dans la console tous les résultats possibles de lancers de deux dés :
// 1 1
// 1 2
// 1 3
// ...
// 6 4
// 6 5
// 6 6
console.log("Exercice 10");

for(let i = 1 ; i <= 6 ; i++) {
    for(let j = 1 ; j <= 6 ; j++) {
        console.log(i, j);
    } 
}

// TODO

// Exercice 11 : adapter l'exercice précédent pour enlever les doublons (on ne veut pas afficher 1 2 et 2 1, mais seulement l'un des deux).
console.log("Exercice 11");

for(let i = 1 ; i <= 6 ; i++) {
    for(let j = 1 ; j <= 6 ; j++) {
        if (i <= j) {
            console.log(i, j);
        }
    } 
}



// TODO

// Exercice 12 : en prenant des dés à 20 faces, combien de résultats différents (sans doublon) peut-on afficher ? (Autrement dit : adapter le code précédent pour compter les résultats au lieu de les afficher)
console.log("Exercice 12");

let res = 0;
for(let i = 1 ; i <= 20 ; i++) {
    for(let j = 1 ; j <= 20 ; j++) {
        if (i <= j) {
            res++;
        }
    } 
} 
console.log(res);


// TODO

// Exercice 13 : afficher la table de multiplication de 1 (de 1 à 9):
// 1x1 = 1
// 1x2 = 2
// 1x3 = 3
// 1x4 = 4
// 1x5 = 5
// 1x6 = 6
// 1x7 = 7
// 1x8 = 8
// 1x9 = 9
console.log("Exercice 13");

for(let i=0; i<10; i++) {
    console.log(`1x`+ i +` = ` + i);
}

// TODO

// Exercice 14 : que faut-il modifier du code précédent pour obtenir la table de 2 :
// 2x1 = 2
// 2x2 = 4
// 2x3 = 6
// 2x4 = 8
// 2x5 = 10
// 2x6 = 12
// 2x7 = 14
// 2x8 = 16
// 2x9 = 18
console.log("Exercice 14");

for(let i=0; i<10; i++) {
    console.log(`2x`+ i +` = ` + 2*i);
}

// TODO

// Exercice 15 : comment généraliser pour afficher toutes les tables de multiplication de 1 à 9 :
// 1x1 = 1
// 1x2 = 2
// 1x3 = 3
// 1x4 = 4
// ...
// 9x7 = 63
// 9x8 = 72
// 9x9 = 81
console.log("Exercice 15");
for(let i=1; i<10; i++) {
    for(let j=1; j<10; j++) {
    console.log(`${i}x${j} = ${i*j}`);
    }
}


// TODO

// Exercice 16 : calculer 1+2+3+4+...+99+100. (Vous devriez trouver 5050)
console.log("Exercice 16");

let res16 = 0;
for(let i=1; i<=100; i++) {
    res16 += i;
}
console.log(res16)



// TODO

// Exercice 17 : trouver le nombre n tel que 1+2+3+4+5+...+(n-1)+n = 302253
console.log("Exercice 17");

let n = 1;
let index = 2;

while (n != 302253) {
    n += index;
    index++;
}

console.log(n)
console.log(index)

// TODO

// Exercice 18 : Afficher :
// 1
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34
// 55
console.log("Exercice 18");

let n1 =0;
let n2 =1;
let res18 = 1;

for(let i=0; i<10; i++) {
    console.log(res18)
    res18 = n1 + n2;
    n1 = n2;
    n2 = res18;
}


// TODO

// Exercice 19 : compter combien il y a de nombres multiples de 3 ou de 7 entre 1234 et 5678
console.log("Exercice 19");

console.log(
    (
        (
            (5678-(5678%3))/3
        ) - 
        (
            (1234-(1234%3))/3
        )
    ) +
    (
        (5678-(5678%7))/7
    ) - 
    (
        (1234-(1234%7))/7
    )
)

let res19 = 0;
for (let i = 1234; i <= 5678 ; i++) {
    if (i%3 == 0 || i%7 == 0) {
        res19++;
    }
}
console.log(res19);

// TODO

// Exercice 20 : afficher dans la console :
/*
*
**
***
****
*****
*/
console.log("Exercice 20");

let texte = '*'

for(let i=0; i<5; i++) {
    console.log(texte);
    texte = texte + "*";
}

// TODO

// Exercice 21 : afficher dans la console :
/*
    *
   **
  ***
 ****
*****
*/
console.log("Exercice 21");

texte = '';

for(let i=0; i<5; i++) {
    for(let j=0; j<5; j++) {
        if (j < 4-i) {
            texte += " ";
        } else {
            texte += "*";
        }
    } console.log(texte);
    texte = '';
}

// texte = '';

// for(let i=0; i<5; i++) {
//     for(let j=0; j<5; j++) {
//         if (j < 4-i) {
//             texte += " ";
//         } else {
//             texte += "*";
//         }
//     } texte += "\n";
// }
// console.log(texte);






// TODO

// Exercice 22 : afficher dans la console :
/*
    *
   ***
  *****
 *******
*********
*/
console.log("Exercice 22");

texte = '';

for(let i=0; i<5; i++) {
    for(let j=0; j<5; j++) {
        if (j < 4-i) {
            texte += " ";
        } else {
            texte += "**";
        }
    } console.log(texte);
    texte = '';
}




// TODO

// Exercice 23 : afficher dans la console :
/*
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/
console.log("Exercice 23");
// TODO
