console.log("Calculator logic file starting ...");

module.exports.addNumber = function(a, b) {
  return a + b;
};

module.exports.subNumber = function(a, b) {
  if (a <= b) {
    return b - a;
  } else {
    return a - b;
  }
};

module.exports.mulNumber = function(a, b) {
  return a * b;
};

module.exports.divNumber = function(a, b) {
  if (b === 0) {
    return "variable b has to be non zero value";
  } else {
    return a / b;
  }
};

console.log(module);
