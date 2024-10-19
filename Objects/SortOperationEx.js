//sorting
//By default, sort() sorts elements as strings. This means it compares their Unicode code point values, which can lead to incorrect results for numbers.

//The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end
//(end not included) where start and end represent the index of items in that array.The original array will not be modified.
let unSortedArrayOne = [11, 82, 3, -2, 10, 100, 84];

let unSortedArryTwo = [41, 45, 26, 17];

//ascending order sort
let sortedInAscending = unSortedArrayOne.slice().sort((a, b) => a - b);

console.log(sortedInAscending);

//decending order sort
let sortedInDescending = unSortedArrayOne.slice().sort((a, b) => b - a);

console.log(sortedInDescending);

console.log(sortedInAscending);

let objectArray = [
  { skey: "s", lkey: 20 },
  { skey: "u", lkey: 22 },
  { skey: "i", lkey: 62 },
  { skey: "k", lkey: 23 },
  { skey: "z", lkey: 42 },
];

objectArray.sort((a, b) => (a.skey > b.skey ? 1 : -1));

console.log(objectArray);
