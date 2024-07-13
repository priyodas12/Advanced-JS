console.log('starting....');

setTimeout(() => {
	console.log('I am callback!');
}, 4000);

console.log('ending....');

console.log('start eventListener...');

// @ts-ignore
document
	.getElementById('btn')
	.addEventListener('click', function callbackFunction() {
		console.log('callback event listener!');
	});

console.log('end eventListener...');
