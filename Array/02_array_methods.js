// @ts-ignore
const log = function (operation, array) {
	console.log(operation, array);
};

const numbers = [1, 2, 3, 4, 5, 6, 7];

//add at last
numbers.push(100);

log('push', numbers);

//remove from end
numbers.pop();

log('pop', numbers);

//add from start
numbers.unshift(-100);

log('unshift', numbers);

//remove from start
numbers.shift();

log('shift', numbers);

//reverse array
numbers.reverse();
numbers.reverse();

log('reverse', numbers);

//is include array
log('includes', numbers.includes(4));

//index of
log('index of 4 = ', numbers.indexOf(4));

let sliceNumbers = numbers.slice(2);

log('slice', sliceNumbers);

sliceNumbers = numbers.slice(2, 4);

log('slice', sliceNumbers); // show inde of element 3 & 4

//actual arrray
log('after slice', numbers);

//let spliceNumbers = numbers.splice(2);

//log('splice: plucked these elemnts from this array', spliceNumbers);

//actual arrray
log('after splice numbers remaining', numbers);

//remove elemnts with splice

let spliceNumbers = numbers.splice(2, 2);

log('splice: plucked these elemnts from this array', spliceNumbers);

log('after splice numbers remaining', numbers);
