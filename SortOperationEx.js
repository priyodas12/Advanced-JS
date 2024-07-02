//sorting
//By default, sort() sorts elements as strings. This means it compares their Unicode code point values, which can lead to incorrect results for numbers.
let unSortedArrayOne = [11, 82, 3, -2, 10, 100, 84];

let unSortedArryTwo = [41, 45, 26, 17];

//ascending order sort
let sortedInAscending = unSortedArrayOne.sort((a, b) => a - b);

console.log(sortedInAscending);

//decending order sort
let sortedInDescending = unSortedArrayOne.sort((a, b) => b - a);

console.log(sortedInDescending);
