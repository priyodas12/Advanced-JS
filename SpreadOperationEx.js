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

spreadOpArrayOne[2] = 902;

let combinedArray = [...spreadOpArrayOne, ...spreadOpArrayTwo];

console.log(combinedArray);

//with duplicate key

let combinedArrayTest = [...[1, 2, 3, 4], ...[4, 5, 6]];

console.log(combinedArrayTest);

let testObject = {
  fkey: 10,
  skey: 223,
};

console.log(testObject);

var testObjectSpread = { ...testObject };

console.log(testObjectSpread);

testObjectSpread = { ...testObject, ...{ tkey: 192 } };

console.log(testObjectSpread);

testObjectSpread = { ...testObject, lkey: 243 };

console.log(testObjectSpread);

//with duplicate key

testObjectSpread = { ...testObject, skey: 243 };

console.log(testObjectSpread);
