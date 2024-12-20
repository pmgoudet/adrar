// EXO 1

// const link = document.querySelector('.link');
// const link2 = document.querySelector('.link2');

// link.addEventListener('click', () => {
//     console.log("Ae rapá")
// })

// let msggg = '';

// addEventListener('keypress', (e) => {
//     console.log(e)
//     msggg += e.key
// })



////////////////////////////////////////////// EXO 2

// let parag = document.createElement('textarea');
// btn = document.createElement('button');

// addEventListener('keypress', () => {
//     let txtPrompt = prompt('Dis-moi tout, bro.');
//     form = document.createElement('form');
//     form.name = 'form'

//     btn.innerText = 'Apagar';
//     btn.type = 'reset'

//     document.body.appendChild(form);
//     form.appendChild(parag);
//     form.appendChild(btn);

//     parag.value = txtPrompt;
// })



////////////////////////////////////////////// EXO 3

addEventListener('click', (e) => {
    console.log(e.clientX, e.clientY);

    let img = document.createElement('img');
    img.src = "meme.png"
    img.style.position = 'absolute'
    img.style.top = (e.clientY-img.height/2)+'px';
    img.style.left = (e.clientX-img.width/2)+'px';

    document.body.appendChild(img);

    console.log(img.height)
})

