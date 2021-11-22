function receivesAFunction(cb) {
    cb();
}

function returnsANamedFunction() {
    return function returnFunction() {
    };
}

function returnsAnAnonymousFunction() {
    return function () {
    };
}