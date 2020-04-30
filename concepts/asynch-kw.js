// Asynch-kw.js is a study on using the async keyword to handle
// Promises

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


async function fetchCall() {
	const call_ = await call();
	return call_
}

fetchCall().then(success => {
	console.log(success.text);
},

failure => {
	console.log('For some reason, the Promise did not deliver');
})
