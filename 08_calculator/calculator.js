const add = function(num1, num2) {
    return num1 + num2;	
};

const subtract = function(num1, num2) {
  return num1 - num2;	
};

const sum = function(array) {
  //computes the sum of an array of numbers
  // if array is empty, return 0
  if (array.length === 0) {
    return 0;
  }
  // if array has one number, return that number
  if (array.length === 1) {
    return array[0];
  }
  // if array has more than one number, use reduce to add them
  return array.reduce((acc, num) => acc + num);
};

const multiply = function(array) {
  //multiply an array of numbers
  // if array is empty, return 0
  if (array.length === 0) {
    return 0;
  }
  // if array has one number, return that number
  if (array.length === 1) {
    return array[0];
  }
  // if array has more than one number, use reduce to multiply them
  return array.reduce((acc, num) => acc * num);
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num1) {
	// function for calculating factorial of number
  // if number is 0, return 1
  if (num1 === 0) {
    return 1;
  }
  // if number is 1, return 1
  if (num1 === 1) {
    return 1;
  }
  // if number is greater than 1, use recursion to calculate factorial
  return num1 * factorial(num1 - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
