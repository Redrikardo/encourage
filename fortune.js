teller = {
	guess: () => {
		const millions = Math.random();
		const message = `you will earn ${millions} euros this year`;
		console.log(message);
	},
};
console.log(teller.guess());
// logs undefined as second
