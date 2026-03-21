const sumAll = function (a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
    return "ERROR";
  }
  let sumResult = 0;
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    sumResult += i;
  }
  return sumResult;
};

// Do not edit below this line
module.exports = sumAll;
