let memory = [];

function reset() {
	memory = [];
}

function p(n) {
	memory.push(n);
}

function duplicate() {
	p(memory[memory.length-1]);
}

function r() {
	return memory.pop();
}

function add() {
	let a = r();
	let b = r();
	p(a+b);
}

function sub() {
	p(r() - r());
}

function twice() {
	duplicate();
	add();
}	

function print() {
	console.log("Contenu actuel :");
	for(let i = 0 ; i < memory.length ; i++) {
		console.log(i,'->',memory[i]);
	}
}

// Niveau 1
console.log("Niveau 1");
reset();
p(2); // push 2 no fim
p(8); // push 8 no fim
print();

/*
0 -> 2
1 -> 8
*/

// Niveau 2
console.log("Niveau 2");
reset();
p(2); // push 2
twice(); 
/*
function twice() {
	duplicate();
		p(memory[memory.length-1]);
		p(2[0]) = 2 ATÉ AQUI TÁ DANDO =========> [2,2]
	add();
		let a = r();
			function r() {
			return memory.pop(); TIRA O 2 E TRANSFORMA EM A
			}
		let b = r(); TIRA O 2 E TRANSFORMA EM B
		p(2+2); ========> push 4 -> [4]
}	
*/

print();
// 0 -> 4 


// Niveau 3
console.log("Niveau 3");
reset();
p(53); // memory = [53]
for(let i = 0 ; i < 4; i++) {
	p(53); // memory = [53, 53]
	add();
	/*
	0	let a = r(); = 53
		let b = r(); = 53
		p(a+b); memory = [106]

	1	let a = r(); = 106
		let b = r(); = 0
		p(a+b); memory = [106]
	*/
}

p(1); // memory = [106, 1]
for(let i = 0 ; i < 9 ; i++) {
	twice();
		/*
		function twice() {
			function duplicate() {
				p(memory[memory.length-1]);  =====> [106, 1, 1]
}			add();
				let a = r(); = 1
				let b = r(); = 1
				p(a+b); [106,2]
		*/
}

add();
print();

// Niveau 4
console.log("Niveau 4");
memory = [];
let level2 = 5;
for(let i = 0 ; i<level2 ; i++) {
	p(i+1);
}
print();
while(memory.length>1) {
	add();
}
print();

// Niveau 5
console.log("Niveau 5");
let level5 = 5;
reset();

p(0); // memory = [0]
for(let i = 0 ; i < level5-1 ; i++) {
	duplicate();
	twice();
	p(1);
	add();
}

print(); // Doit afficher :
// 0 -> 0
// 1 -> 1
// 2 -> 3
// 3 -> 7
// 4 -> 15


/*

function print() {
	console.log("Contenu actuel :");
	for(let i = 0 ; i < memory.length ; i++) {
		console.log(i,'->',memory[i]);
	}
}

*/