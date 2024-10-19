let a = 10;
const outer = () => {
	let b = 20;
	function inner() {
		let a = 100;
		let c = 30;
		console.trace(a, b, c);
	}
	inner();
};

outer();
