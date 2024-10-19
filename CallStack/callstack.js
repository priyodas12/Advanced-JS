const multiply = (a, b) => a * b;

const square = (a) => {
	console.log('suqare of ', a);
	return a * a;
};

const isRightAngle = (a, b, c) => {
	console.log('checking isRightAngle::');
	let res = square(a) + square(b) === square(c);
	console.log('result:: ', res);
	return res;
};

console.log(isRightAngle(3, 4, 5));
