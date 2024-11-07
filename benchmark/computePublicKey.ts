declare const Benchmark: any;

export default (Recrypt: typeof import("../lib/Api480Shim"), logResult: (results: string) => void) => {
    const api = new Recrypt.Api480();

    let privateKey: Uint8Array;

    function onCycle() {
        privateKey = api.generateKeyPair().privateKey;
    }
    onCycle();

    return new Benchmark("computePublicKey", {
        fn: () => {
            api.computePublicKey(privateKey);
        },
        onError: (err: Error) => {
            console.log(err);
        },
        onCycle,
        onComplete: (result: any) => {
            const resultString = result.currentTarget.toString();
            logResult(resultString);
            console.log(result.currentTarget.toString());
        },
    });
};
