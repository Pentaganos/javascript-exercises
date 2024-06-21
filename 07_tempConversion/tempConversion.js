const convertToCelsius = function(tempConversion) {
  //convert from farenheit to celsius with 1 decimal place
  return Math.round ((tempConversion - 32) * 5/9 * 10) / 10;
};

const convertToFahrenheit = function(tempConversion) {
  return Math.round ((tempConversion * 9/5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
