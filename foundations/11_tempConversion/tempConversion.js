const convertToCelsius = function(fahrenheirt) {
  let celsius = (fahrenheirt - 32) * (5/9);
  let roundCelsius = Math.round(celsius * 10) / 10
  return roundCelsius;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = (celsius * 9/5 + 32);
  let roundFahrenheit = Math.round(fahrenheit * 10) / 10
  return roundFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
