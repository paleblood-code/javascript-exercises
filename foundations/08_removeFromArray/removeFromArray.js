const removeFromArray = function (array, ...items) {
  const resultArray = array.filter((item) => {
    return !items.includes(item);
  });
  return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;
