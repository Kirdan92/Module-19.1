//Zadanie 1
const hello = 'Hello';
const world = 'World';
(first, second) => console.log(`${first} ${second}`);

//Zadanie 2
const multiply = (a, b = 1) => a*b;
console.log(multiply(5, 2));


//Zadanie 3
let sum = 0;
const average = (...args) => {sum = 0; args.forEach(arg => sum += arg);
	return sum/args.length
};

console.log(average(1,2,3,4));

//Zadanie 4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average(...grades))

//Zadanie 5

const table5 = [1, 4, 'Iwona', false, 'Nowak'];

const [,, firstName,, lasName] = table5;

console.log(`Pierwsze imię to: ${firstName}, a drugie to: ${lasName}`);