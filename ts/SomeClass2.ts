class SomeClass2 {
	constructor() {
		try {
			delayAsync(3000);
			delayAsync(2000);
			delayAsync(1000);
		} catch (e) {
			console.log(e);
		}
	}
}

let sc2 = new SomeClass2();