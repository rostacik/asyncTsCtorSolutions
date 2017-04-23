class SomeClass3 {
	constructor() {
		console.log("SomeClass3 - entry");
		(async () => {
			try {
                await delayAsync(3000);
				await delayAsync(1000);
				await delayAsync(2000);
			} catch (e) {
				console.log(`catch triggered with exception ${e}`);
			}
		})();
		console.log("SomeClass3 - exit");
	}
}

let sc3 = new SomeClass3();