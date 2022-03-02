const object = {
	firstKey: "first value",
	secondKey: "second value",
};
console.log(object.secondKey);

const first = Math.random();
console.log(first); // resolves random number 1 -0

const second = Math.random();
console.log(second); // resolves random number 1 -0

const speeches = {
	greeting: () => {
		console.log("hello"); // without clg resolves hello / prettier correct clg
	},
	farewell: () => {
		console.log("goodbye"); // with clg
	},
};

speeches.greeting();
speeches.farewell();
