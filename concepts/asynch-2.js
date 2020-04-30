// Asynch-2.js is a study on how to write asynchronous functions with
// callback function to properly function

const call = callback => {

	// Don't forget to enter a function for a call back to run the call back function
	setTimeout( () => {
		callback({ text : 'Callback completed'})
	},
		2000
	)
}

call(simple => {
	console.log(simple.text);
});
// Asynch-3.js is a study on how to write asynchronous functions
// using Promise objects

const call = callback => {
	return new Promise((res, rej) => {
		setTimeout( () => {
			let error = true;
			if (!error) {
				res ({ text : 'Complete Code Example'})
			} else {
				rej()
			}
		},
		2000
		)
	})
}

call().then(
// Function for the resolution scenario in a Promise
	todo => {
	console.log(todo.text)
}).catch(
	error => {
		console.log(error);
	}
)