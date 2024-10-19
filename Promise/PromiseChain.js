const promise1 = new Promise((resolve, reject) => {
	let flag = Math.random() < 0.5;
	if (flag) {
		setTimeout(() => resolve(10), 1000);
	} else {
		reject('Error:Promise1');
	}
});

const promise2 = new Promise((resolve, reject) => {
	let flag = Math.random() < 0.5;
	if (flag) {
		setTimeout(() => resolve(11), 1000);
	} else {
		reject('Error:Promise2');
	}
});

const promise3 = new Promise((resolve, reject) => {
	let flag = Math.random() < 0.5;
	if (flag) {
		setTimeout(() => resolve(12), 1000);
	} else {
		reject('Error:Promise3');
	}
});

// exceute promise one after another
promise1
	.then((data1) => {
		console.log('promise1', data1);
		return promise2;
	})
	.then((data2) => {
		console.log('promise2', data2);
		return promise3;
	})
	.then((data3) => {
		console.log('promise3', data3);
	})
	.catch((error) => {
		console.log('Error:: ', error);
	});

Promise.allSettled([promise1, promise2, promise3])
	.then((results) => {
		console.log('Final Result::', results);
	})
	.catch((error) => {
		console.log('Error', error);
	});
