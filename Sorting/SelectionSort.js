const unSortedNumbers = [2, 4, 10, 5, 6, 1, 8];

function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let min = i;
		for (let j = i + 1; j < arr.length; j++) {
			console.log(arr[j]);
			if (arr[min] > arr[j]) {
				min = j;
			}
		}
		console.log(min);
		let temp = arr[i];
		arr[i] = arr[min];
		arr[min] = temp;
	}
	console.log(arr);
}

const sortedNumbers = selectionSort(unSortedNumbers);

console.log(sortedNumbers);
