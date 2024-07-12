//What is callback function: function which passed as parameter that can be called by anytime soon or whatever it likes to call.

//x; function as parameter
function y(x) {}

//here function as argument.
y(function thisIsCallbackFunction() {
	console.log('from callback function');
});

y();

setTimeout(function callMeAfterSomeTime() {
	console.log('finally I was called to execute!');
}, 5000);
