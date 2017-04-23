function ready(fn) {
    if (document.readyState !== "loading") {
        fn();
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

class SomeClass5 {
    constructor() {
        console.log("SomeClass5 - entry");
        ready(async () => {
            try {
                await delayAsync(3000);
                await delayAsync(1000);
                await delayAsync(2000);
            } catch (e) {
                console.log(`catch triggered with exception ${e}`);
            }
        });
        console.log("SomeClass5 - exit");
    }
}

let sc5 = new SomeClass5();