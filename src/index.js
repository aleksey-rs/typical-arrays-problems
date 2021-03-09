
exports.min = function min (array) {
  if (array === undefined || array === null || array.length <= 0){
    return 0;
  }
  array.sort((a, b) => {
    if (a > b) {
      return 1;
    } else return -1;
  });
  return array.shift();
}

exports.max = function max (array) {
  if (array === undefined || array === null || array.length <= 0){
    return 0;
  }
  array.sort((a, b) => {
    if (a < b) {
      return 1;
    } else return -1;
  });
  return array.shift();
}

exports.avg = function avg (array) {
  if (array === undefined || array === null || array.length <= 0){
    return 0;
  }
  let sum = array.reduce(function(result, item) {
    return result + item;
  }, 0);
  return sum/array.length;
}
