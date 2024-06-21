const removeFromArray = function(array, args) {
    let argsArray = Array.from(arguments).slice(1);
    return array.filter(item => !argsArray.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
