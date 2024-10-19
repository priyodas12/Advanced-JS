const weatherData = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const validDate = Math.random() < 0.9;

			if (validDate) {
				resolve({
					city: 'Bengaluru',
					date: new Date(),
					temp: '34 C',
					humidity: '88%',
				});
			} else {
				reject('Error: Invalid date!');
			}
		}, 1000);
	});
};

const trafficData = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const validDate = Math.random() < 0.9;

			if (validDate) {
				resolve({
					city: 'Bengaluru',
					date: new Date(),
					trafficStatus: 'orange',
					accidentCount: 19,
				});
			} else {
				reject('Error: Invalid date!');
			}
		}, 1000);
	});
};

const cityInfo = async () => {
	const weatherInfo = await weatherData();
	const trafficInfo = await trafficData();
	console.log({ weatherInfo, trafficInfo });
};

console.log(cityInfo());
