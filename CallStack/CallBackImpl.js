//What is callback function: function which passed as parameter that can be called by anytime soon or whatever it likes to call.

//x; function as parameter
function y(x) {}

//here function as argument.
y(function thisIsCallbackFunction() {
	console.log('from callback function');
});

y();

setTimeout(function callMeAfterSomeTime() {
	console.log('\ncallMeAfterSomeTime::finally I was called to execute!'); //after 5000 millisec this function will be visible into callstack.this operation blocks the call stack.(blocking the main thread.)
}, 5000);

setInterval(() => {
	console.log('\ncalling in interval!');
}, 3000);
