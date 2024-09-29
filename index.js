function receivesAFunction(cb) {
    console.log(cb());
}

function returnsANamedFunction() {
    return function aNamedFunction() {};
}

function returnsAnAnonymousFunction() {
    return function () {};
}