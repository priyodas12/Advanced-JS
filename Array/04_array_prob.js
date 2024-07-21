//Find a peak element which is not smaller than its neighbours

const sampleArr = [10, 20, -15, 2, -23, 90, 67];

//consider 20 as a peak element where both 10,15 are less than 20, similar example is 90
//result will be 20,90

function findPeakElement(arr) {
	let results = [];
	for (let i = 0; i < arr.length; i++) {
		if (i === 0 && i === arr.length - 1) {
			return;
		} else {
			let prev = arr[i - 1];
			let after = arr[i + 1];
			let current = arr[i];
			if (current > prev && current > after) {
				results.push(current);
			}
		}
	}
	console.log(results);
}

findPeakElement(sampleArr);
