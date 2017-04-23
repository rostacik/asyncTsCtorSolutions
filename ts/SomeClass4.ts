// (should be exported) interface so we can work with the object outside
interface ISomeClass {
    stringPublic: string;
    numberPublic: number;
}

// (should not be exported) = not visible from outside
class SomeClass implements ISomeClass {
    public stringPublic: string;
    public numberPublic: number;

    private somePrivateFn() {
        console.log("this is private fn");
    }
}

// (should be exported so we can call the function from outside)
async function createSomeClassAsync(): Promise<SomeClass> {
    let res = new SomeClass();

    await delayAsync(1000);
    await getConfirmAsync("1");
    await delayAsync(3000);
    await getConfirmAsync("2");
    await delayAsync(2000);
    res.numberPublic = 1;
    res.stringPublic = "aa";
    // res.somePrivateFn(); since we are not inside function this would fail

    return res;
}

(async () => {
    try {
        let res = await createSomeClassAsync();
        console.log(res.numberPublic);
        console.log(res.stringPublic);
    } catch (e) {
        console.log(`catch triggered with exception ${e}`);
    }
})();