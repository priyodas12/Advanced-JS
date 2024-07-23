const person = {
	age: 20,
	name: 'testo',
	isAdmin: true,
	cibilScore: 784.89,
	address: {
		city: 'Bengaluru',
		pincode: 560082,
	},
	vehicle: ['car-Suzuki', 'bike-honda'],
};

console.log(person['name'], person['address']);
person['name'] = 'john mike';
console.log(person['name'], person['address']);

// @ts-ignore
//removing any property
delete person.age;

person.hasHouse = true;

person.greetOthers = function () {
	console.log(`Hello Guest! I am ${this.name}`);
};
console.log('-----------');
console.log(person);
console.log('-----------');
console.log('calling', person['greetOthers']);
console.log('-----------');
console.log('actual call', person.greetOthers());
