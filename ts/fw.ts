/**
 * async version of confirm dialog
 * @param message message to ask the user
 */
async function getConfirmAsync(message: string): Promise<boolean> {
	let promise = new Promise<boolean>(function (resolve, reject) {
		let res = confirm(message);
		console.log(res);
		resolve(res);
	});

	return promise;
}

/**
 * async version of setTimeout function
 * @param ms milliseconds to wait for
 */
function delayAsync(ms: number): Promise<string> {
	return new Promise<string>(function (resolve, reject) {
		console.log(`delayAsync fn enter with ${ms}ms`);
		setTimeout(() => {
			console.log(`delayAsync fn with ${ms}ms ended`);
			if (isEven(ms)) {
				resolve(`delayAsync with ${ms}ms ended OK`);
			} else {
				reject(`delayAsync with ${ms}ms ended rejected`);
			}
		}, ms);
		console.log(`delayAsync fn exit with ${ms}ms`);
	});
}

/**
 * is number even?
 */
function isEven(n: number): boolean {
	return n % 2 === 0;
}