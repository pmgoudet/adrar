// 1

const usersHuman = [{
    type: "humain",
    name: "John Doe",
    email: "j.smith@gmail.com",
    age: 25
},
{
    type: "humain",
    name: "Jane Smith",
    email: "ja.doe@sfr.fr",
    age: 5
},
{
    type: "humain",
    name: "Le Vénérable",
    email: "levy@gmail.com",
    age: 500
}
];

const usersPet = [{
    type: "animal de compagnie",
    espece: "chien",
    name: "Rox",
    age: 7,
    propriétaire: "John Doe"
},
{
    type: "animal de compagnie",
    espece: "renard",
    name: "Roukie",
    age: 300,
    propriétaire: "Le Vénérable"
}
];

const usersXeno = [{
    type: "Xeno",
    espece: "Krogan",
    name: "Wrex",
    menace: "Rouge",
    age: 45
},
{
    type: "Xeno",
    espece: "Turien",
    name: "Garrus",
    menace: "Vert",
    age: 35
},
{
    type: "Xeno",
    espece: "Asari",
    name: "Liara",
    menace: "ULTRA Rouge",
    age: 25
}
];


// 2

let tabData = [];
tabData = [usersPet, usersXeno, usersHuman];


// 3

function afficherHummain(objet) {
    console.log('--------------------------');
    console.log(`nom: ${objet.name}`);
    console.log(`email: ${objet.email}`);
    console.log(`age: ${objet.age} ans`);
    console.log('--------------------------');
}


// 4 

function afficherAnimal(objet) {
    console.log('--------------------------');
    console.log(`nom: ${objet.name}`);
    console.log(`espece: ${objet.espece}`);
    console.log(`age: ${objet.age} ans`);
    console.log(`propriétaire: ${objet.propriétaire}`);
    console.log('--------------------------');
}


// 5

function afficherXeno(objet) {
    console.log('--------------------------')
    console.log(`nom: ${objet.name}`);
    console.log(`espece: ${objet.espece}`);
    console.log(`age: ${objet.age} ans`);
    console.log(`niveau de menace: ${objet.menace}`);
    console.log('--------------------------');
}


// 6, 7 et 8


function profil(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].type == "humain") {
            afficherHummain(array[i]);
        } else if (array[i].type == "animal de compagnie") {
            afficherAnimal(array[i]);
        } else if (array[i].type == "Xeno") {
            afficherXeno(array[i]);
        } else {
            console.log('Type de Profil non Existant');
        }
    }
}


// 9

// profil(usersPet);
// profil(usersHuman);
// profil(usersXeno);


// 10 et 11

function profilAll(array) {
    for (let k = 0; k < array.length; k++) {
        profil(array[k])
    }
}


profilAll(tabData);


