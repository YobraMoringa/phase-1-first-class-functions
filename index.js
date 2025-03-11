function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    return returnsAnAnonymousFunction;
}

function returnsAnAnonymousFunction() {
    return function () {
        return "I'm anonymous";
    };
}