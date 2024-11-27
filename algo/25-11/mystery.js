function f1(arr) {
	let result = 0;
	for(let i = 0 ; i < arr.length ; i++) {
		if(arr[i]%2==0) { // se numero na casa é par:
			result += arr[i];
		}
	}
	return result;
}
	
function f2(arr) {
	let result = 0;
	for(let i = 0 ; i < arr.length ; i++) {
		if(i%2==0) { // se a casa é par
			result += arr[i];
		}
	}
	return result;
}

// Écrire une fonction f3 qui prend un tableau en entrée
// et qui retourne la somme des numéros de cases des éléments pairs d'un tableau


t = [1,2,4,4,5,6];

console.log(f1(t));
console.log(f2(t));


function mystery (arr) {
	let result = 0;
	for(let i = 0 ; i < arr.length ; i++) {
		if(arr[i]%2==0) {
			result += i;
		}
	}
	return result;
}

console.log(mystery(t));
