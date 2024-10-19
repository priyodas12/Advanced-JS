const selectOrder = (callback, delay) => {
	setTimeout(() => {
		console.log('1.Selecting Order Items!');
		callback();
	}, delay);
};

const addToCart = (callback, delay) => {
	setTimeout(() => {
		console.log('2.Order added to cart!');
		callback();
	}, delay);
};

const completePayment = (callback, delay) => {
	setTimeout(() => {
		console.log('3.Successful Payment!');
		callback();
	}, delay);
};

const emailNotification = (callback, delay) => {
	setTimeout(() => {
		console.log('4.Notified Customer for Order placement!');
		callback();
	}, delay);
};

const orderDispatch = (callback, delay) => {
	setTimeout(() => {
		console.log('5.Order dispatched');
		callback();
	}, delay);
};

const orderDelivered = (callback, delay) => {
	setTimeout(() => {
		console.log('6.Delivered Order to Customer');
		callback();
	}, delay);
};

//callback hell
selectOrder(
	() =>
		addToCart(
			() =>
				completePayment(
					() =>
						emailNotification(
							() =>
								orderDispatch(
									() =>
										orderDelivered(
											() => console.log('Done'),
											1000,
										),
									1000,
								),
							1000,
						),
					1000,
				),
			1000,
		),
	1000,
);
