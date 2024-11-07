declare const Benchmark: any;

export default (Recrypt: typeof import("../lib/Api480Shim"), logResult: (results: string) => void) => {
    const api = new Recrypt.Api480();
    return new Benchmark("generatePlaintext", {
        fn: () => {
            api.generatePlaintext();
        },
        onError: (err: Error) => {
            console.log(err);
        },
        onComplete: (result: any) => {
            const resultString = result.currentTarget.toString();
            logResult(resultString);
            console.log(result.currentTarget.toString());
        },
    });
};
