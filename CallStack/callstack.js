const multiply = (a, b) => a * b;

const square = (a) => a * a;

const isRightAngle = (a, b, c) => square(a) + square(b) === square(c);

console.log(isRightAngle(3, 4, 5));
