const promise = new Promise((resolve, reject) => {
	let num = Math.floor(Math.random() * 10);
	console.log(num);
	if (num > 5) {
		reject(new Error('Something went wrong!'));
	} else {
		setTimeout(() => resolve(num), 1000);
	}
});

//console.log(promise);

promise
	.then((data) => console.log('retrieved', data))
	.catch((e) => console.log('catched error:: ', e));
