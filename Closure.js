const outer1 = () => {
	let counter = 0;
	function inner() {
		counter++;
		console.log(counter);
	}
	return inner;
};

//when a function returned from another function.then javascript jut not returned the function also scope
const fb = outer1();
fb();
fb();

const outer3 = () => {
	let incrementalValue = 0;
	function inner3() {
		incrementalValue += Math.round(Math.random() * 10000);
		console.log(incrementalValue);
	}
	console.log(incrementalValue);
	return inner3;
};

const test = outer3();
//here test function will be having scope for incrementalValue

for (let index = 0; index < 10; index++) {
	test();
}
