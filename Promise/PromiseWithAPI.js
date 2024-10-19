const apiResponse = new Promise((resolve, reject) => {
	fetch('https://jsonplaceholder.typicode.com/posts/9')
		.then((response) => {
			if (!response.ok) {
				reject(
					'Failed to fetch data from API: Status::' + response.status,
				);
			} else {
				console.log('API Response: \n', response);
				return response.json();
			}
		})
		.then((response) => {
			console.log('Resolving API Response: \n', response);
			resolve(response);
		})
		.catch((error) =>
			reject('Failed to Extract API response, Error::' + error),
		);
});

apiResponse
	.then((data) => console.log('Data Received: \n', data))
	.catch((error) => console.log('Error Received\n', error));
