//D10
// setPos(300,300);
// faceRight();

// let long = 50;

// for(let i=0; i<10; i++) {
//     forward(long);
//     right(90);
//     long += 25;
// }


//D11
// setPos(200,300);

// faceRight();
// let long = 100;

// for(let i=0; i<5; i++) {
//     for(let j=0; j<4; j++){
//         forward(long);    
//         left(120);
//     }
//     faceRight();
//     long -= 20;
//     shiftColor(0.25);
// }


//D12


// setPos(300,300);

// faceRight();
// let long = 50;

// for(let i=0; i<6; i++) {    
//     for(let j=0; j<4; j++){
//         forward(long);    
//         left(120);
//     }
//     right(60);
//     long += 25
// }


//D13

// setPos(300,300);

// faceRight();
// let raio = 30;

// for(let i=0; i<8; i++) {
//     arcRight(raio,180);
//     up();
//     forward(15);
//     down();
//     raio += 15;
// }


//D14

// setPos(200,300);

// faceRight();
// left(45)
// let long;

// for(let i=0; i<2; i++) {
// long = 20;
//     for(let i=0; i<4; i++) {
//         forward(long);
//         right(90);
//         forward(long);
//         left(90);
//         long += 20;
//     }
//     right(180);
// }


//D15
// setPos(300,300);
// faceDown();
// let long = 50;
// let angulo = 90;

// for(let i=0; i<18; i++){
//     forward(long);
//     left(angulo);
//     angulo -= 5;
//     long += 10;
// }


//D16

// setPos(250,300);
// faceDown();
// let raio = 50;

// forward(100);
// right(120);
// forward(50);
// left(30);
// forward(50);
// right(90);
// forward(50);
// right(90);
// forward(50);
// left(30);
// forward(50);
// up();
// right(30)
// forward(50);
// down();
// shiftColor(0.25)

// for(let i=0; i<3; i++) {
//     arcRight(raio, 180);
//     up();
//     arcRight(raio, 180);
//     faceUp();
//     forward(50);
//     faceRight();
//     down();
//     raio += 50
// }




// DEFIS

setPos(250,500);
faceRight();
let angle = 120;

for(let i=1; i<11; i++) {    
    for(let j=1; j<i+2; j++){
        forward(50);
        left(angle);
    }
    angle =((i-2)*180)/(i+2);
}



/*

((n−2)×180)/n
​


60
90
108
120
128.57

*/