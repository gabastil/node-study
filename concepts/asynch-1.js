// Asynch-1.js is a study on how asynchronous functions function in
// a non-sequentla manner

const call = () => {
	setTimeout(
		() => {
			return { text : 'Callback completed'}
		},
		2000
	)
}

var result = call();
console.log(result.text);
