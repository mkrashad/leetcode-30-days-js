/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let currentCount = init;
  const val = {
    increment: function () {
      currentCount = ++currentCount;
      return currentCount;
    },
    decrement: function () {
      currentCount = --currentCount;
      return currentCount;
    },
    reset: function () {
      currentCount = init;
      return currentCount;
    },
  };
  return val;
};

// /**
const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
//  counter.increment(); // 6
//  counter.reset(); // 5
//  counter.decrement(); // 4
