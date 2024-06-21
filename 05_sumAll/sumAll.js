const sumAll = function() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number' || arguments[i] < 0) {
        return 'ERROR';
        }
    }
    if (arguments[0] < arguments[1]) {
        for (let i = arguments[0]; i <= arguments[1]; i++) {
        sum += i;
        }
    } else {
        for (let i = arguments[1]; i <= arguments[0]; i++) {
        sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
