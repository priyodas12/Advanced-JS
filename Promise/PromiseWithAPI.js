const apiResponse = new Promise((resolve, reject) => {
	setTimeout(
		() => {
			fetch('https://jsonplaceholder.typicode.com/posts/9')
				.then((response) => {
					if (!response.ok) {
						// Reject if response status is not OK
						reject(
							'Failed to fetch data from API: Status:: ' +
								response.status,
						);
					} else {
						// Proceed to extract JSON data if the response is OK
						return response.json();
					}
				})
				.then((data) => {
					// This second .then will only be called if the first was successful
					console.log('Resolving API Response: \n', data);
					resolve(data);
				})
				.catch((error) => {
					// Catch any errors from fetch or response processing
					reject('Failed to extract API response, Error:: ' + error);
				});
		},
		//setting up delay
		2000,
	); 
});

apiResponse
	.then((data) => console.log('Data Received: \n', data))
	.catch((error) => console.log('Error Received\n', error));
