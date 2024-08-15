function sum(accum, curr) {
  accum += curr;
  return accum;
}

var reduce = function (nums, fn, init) {
  let finalValue = init;
  nums.forEach((n) => {
    finalValue = fn(finalValue, n);
  });
  return finalValue;
};

let numArr = [1, 1, 1, 1, 1];
console.log(reduce(numArr, sum, 4));
