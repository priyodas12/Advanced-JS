// @ts-ignore
const log = function (operation, array) {
	console.log(operation, array);
};

// @ts-ignore
const numbers = [1, 2, 3, 4, 5, 6, 7];

const nums = [...numbers, 5, 6, 7];

log('new array', nums);

const evens = [2, 0, 4, 6, 8, 10];

evens.push(12);

log('new evens', evens);

const mixedNums = [nums, numbers];

log('mixedNums', mixedNums);

log(mixedNums[1][0]);

const mixedFlatArray = mixedNums.flat();

console.log('flat array', mixedFlatArray);

const _2dArray = [
	[1, 2],
	[2, 8],
	[9, 4],
];

log(_2dArray.flatMap((num) => num));

log(Array.isArray(nums));

log('from helloWorld!', Array.from('helloWorld!'));

let a = 3,
	b = 2,
	c = 1;

log('Enum values example', Array.of(a, b, c));
