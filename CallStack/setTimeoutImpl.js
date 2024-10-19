console.log('1: Starting');

setTimeout(() => {
	console.log('5: After some time!');
}, 8000);

setTimeout(() => {
	console.log('4: After some time!');
}, 5000);

setTimeout(() => {
	console.log('3: After some time!');
}, 3000);

console.log('2: Finishing');
