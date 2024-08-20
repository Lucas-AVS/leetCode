// var compose = function (functions) {
//   let sum = 0;
//   functions.forEach((f) => {
//     return (sum += f());
//   });
//   return sum;
// };

// var fn = function (x) {
//   return compose([(x) => x + 1, (x) => 2 * x]);
// };

// var compose = function (functions, x) {
//   let sum = 0;
//   functions.forEach((f) => {
//     return (sum += f(x));
//   });
//   return sum;
// };

// var fn = function (x) {
//   return compose([(x) => x + 1, (x) => 2 * x], x);
// };

var compose = function (functions) {
  return (x) => {
    functions.reverse().forEach((f) => {
      return (x = f(x));
    });
    return x;
  };
};

const fn = compose([(x) => 10 * x, (x) => 10 * x, (x) => 10 * x]);
console.log(fn(1));
