const analyse = (arr) => {
  const obj = {};
  const average = arr => {
    const len = arr.length;
    const total = arr.reduce((acc, cur) => acc + cur);
    return total / len;
  };
  const min = arr => Math.min(...arr);
  const max = arr => Math.max(...arr);
  const length = arr => arr.length;
  obj.average = average(arr);
  obj.min = min(arr);
  obj.max = max(arr);
  obj.length = length(arr);
  return obj;
};

module.exports = analyse;