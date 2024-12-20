// EXO 1


const title = document.getElementsByTagName('h1')[0];
// const p1 = document.getElementsByTagName('p');
// const txt = document.createTextNode('Yooooo man!');

// document.body.appendChild(p1[2]);

// document.body.replaceChild(txt, title);  // nao funciona
// document.body.p1.appendChild(txt);


// EXO 2


// function ajoutTest(prenom) {
//     const newTxt1 = document.createElement("p");
//     const newTxtStrong = document.createElement("strong");
//     const newTxt2 = document.createElement("span");

//     newTxtStrong.innerText = `${prenom}`;
//     newTxt1.innerText = `Mon ami `
//     newTxt2.innerText = `. Ça va?`

//     document.body.appendChild(newTxt1);
//     newTxt1.appendChild(newTxtStrong);
//     newTxt1.appendChild(newTxt2);
// }

// ajoutTest('Pedro');
// ajoutTest('Carlos');
// ajoutTest('Tonho');
// ajoutTest('Rapeize');
// ajoutTest('Cleitin');




// EXO 3 

// const newParag = document.createElement('p');
// newParag.innerText = "Ae rapaziada, tudo na paz!"
// document.body.appendChild(newParag);

// newParag.setAttribute("class", "boas-vindas");
// console.log(newParag);
// console.log(newParag.getAttribute('class'));

// const lien = document.body.getElementsByTagName('a')[0];
// lien.setAttribute("href", "#");
// console.log(lien);

// const p1 = document.getElementsByTagName('p');
// console.log(p1);
// const paraTab = Array.from(p1);
// console.log(paraTab);
// // paraTab.map(newParag => newParag.innerText = "LOL HACKED");

// console.log([
//     title.clientHeight,
//     title.clientWidth,
//     title.offsetHeight,
//     title.offsetWidth
// ]);

// console.log({
//     'Hauteur Client': title.clientHeight,
//     'Largeur Client': title.clientWidth,
//     'Hauteur OffSet': title.offsetHeight,
//     'Largeur OffSet': title.offsetWidth
// });




// EXO 4

// const titre = document.querySelector('h1');
// const links = document.querySelectorAll('a');

// function couleur() {
//     if (titre.classList.contains('maCouleur')) {
//         titre.style.color = 'red' ;
//     } else {
//         titre.style.color = 'black' ;
//     }
// }

// links[0].addEventListener('click', () => {
//     titre.classList.add('maCouleur')
//     couleur()
// })

// links[1].addEventListener('click', () => {
//     titre.classList.remove('maCouleur')
//     couleur()
// })

// links[2].addEventListener('click', () => {
//     titre.classList.toggle('maCouleur')
//     couleur()
// })




// EXO 5
/*
window.addEventListener('resize', winResize);

const titles = document.getElementsByTagName('h1');
const distanceT1 = (titles[0].offsetTop);
const distanceT2 = (titles[1].offsetTop);
const distanceT3 = (titles[2].offsetTop);

function winResize() {
    distanceT1 = (titles[0].offsetTop);
    distanceT2 = (titles[1].offsetTop);
    distanceT3 = (titles[2].offsetTop);
}

window.addEventListener("wheel", (e) => {
    if (e.deltaY > 0) {
        if (window.scrollY < distanceT2) {
            scrollTo({ top: distanceT2, behavior: 'smooth' });
        } else if (window.scrollY < distanceT3) {
            scrollTo({ top: distanceT3, behavior: 'smooth' });
        }
    } else {
        if (window.scrollY > distanceT2) {
            scrollTo({ top: distanceT2, behavior: 'smooth' });
        } else if (window.scrollY > distanceT1) {
            scrollTo({ top: distanceT1, behavior: 'smooth' });
        }
    }
});

choix()
*/



// resolução:

const lesTitres = document.querySelectorAll("h1");

function goTitre(unTitre) {
    const distance = unTitre.offsetTop;
    window.scrollTo({
        top: distance,
        behavior: 'smooth'
    });
}
//goTitre(lesTitres[2]);

let index = prompt("Entrez l'index du titre (0 à " + (lesTitres.length - 1) + "):");
if (index >= 0 && index < lesTitres.length) {
    goTitre(lesTitres[index]);
} else {
    console.log("Index invalide.");
}

