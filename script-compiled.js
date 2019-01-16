'use strict';

//Zadanie 1
var hello = 'Hello';
var world = 'World';
(function (first, second) {
	return console.log(first + ' ' + second);
});

//Zadanie 2
var multiply = function multiply(a) {
	var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	return a * b;
};
console.log(multiply(5, 2));

//Zadanie 3
var sum = 0;
var average = function average() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	sum = 0;args.forEach(function (arg) {
		return sum += arg;
	});
	return sum / args.length;
};

console.log(average(1, 2, 3, 4));

//Zadanie 4

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average.apply(undefined, grades));

//Zadanie 5

var table5 = [1, 4, 'Iwona', false, 'Nowak'];

var firstName = table5[2],
    lasName = table5[4];


console.log('Pierwsze imi\u0119 to: ' + firstName + ', a drugie to: ' + lasName);
