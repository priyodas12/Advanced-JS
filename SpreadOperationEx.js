//Spread Operations

let spreadOpArrayOne = [11, 82, 3];

let spreadOpArrayTwo = [41, 45, 26, 17];

let copyArray = spreadOpArrayOne;

console.log(copyArray);

spreadOpArrayOne[1] = 100;

let spreadOpArrayOneString = JSON.stringify(copyArray);

console.log(spreadOpArrayOneString);

let spreadArray = [...spreadOpArrayTwo];

console.log(spreadArray);

let combinedArray = [...spreadOpArrayOne, ...spreadOpArrayTwo];

console.log(combinedArray);
