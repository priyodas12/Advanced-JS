const promiseOne = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log('promiseOne:async task');
		resolve('Resolving current task!');
	}, 3000);
});
//then() will connect to resolve

promiseOne.then((data) => {
	console.log('Promise one consumed', data);
});

new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log('promiseTwo:async task');
		resolve('Resolving current task!');
	}, 3000);
}).then((data) => {
	console.log('Promise Two consumed!', data);
});

new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('{name:"test"}');
	}, 3000);
}).then((data) => {
	console.log('Promise Three consumed!', data);
});

new Promise((resolve, reject) => {
	setTimeout(() => {
		fetch('https://jsonplaceholder.org/users/1')
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then((users) => {
				resolve(users);
			})
			.catch((error) => {
				console.error(
					'There was a problem with the fetch operation:',
					error,
				);
				reject(error);
			});
	}, 3000);
})
	.then((data) => {
		console.log('Users::', data);
	})
	.catch((error) => {
		console.log('Error:', error);
	});
