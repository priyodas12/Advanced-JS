function sum(a, b, c) {
	return a + b + c;
}

console.log(sum(2, 3, 4));

function sumCarry(fn) {
	return function (a) {
		return function (b) {
			return function (c) {
				return fn(a, b, c);
			};
		};
	};
}

const curriedSum = sumCarry(sum);

const add2 = curriedSum(2);
const add3 = add2(0);
const add4 = add3(4);

console.log(add4);
