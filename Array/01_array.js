//import deepEqual from 'deep-equal';

//Array Literal
const numberLiterals = [12, 3, 53, 21, 64];

//Array Constructor
var arrayConstructor = new Array(12, 3, 53, 21, 64);

console.log(numberLiterals === arrayConstructor);
console.log(arraysEqual(numberLiterals, arrayConstructor));

function arraysEqual(arr1, arr2) {
	if (arr1.length !== arr2.length) return false;
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false;
	}
	return true;
}

const mixedArray = [12, 'test', true, 9.8, null, undefined];

console.log(mixedArray);

//console.log(deepEqual(numberLiterals, arrayConstructor));
