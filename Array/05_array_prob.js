//find minimum and maximum elemnts

const unSortedArr = [12, -8, 4, 53, 23, 91 - 9];

const sortedAscendingArray = unSortedArr.slice().sort((a, b) => a - b);

console.log(sortedAscendingArray);

console.log(
	'Minimum',
	sortedAscendingArray[0],
	'Maximum',
	sortedAscendingArray[sortedAscendingArray.length - 1],
);
