const person = {
	name: 'test',
	printMyname: function () {
		console.log(this.name);
	},
};

person.printMyname();
