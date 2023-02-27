import { log } from "./fx.js";

const nums = [1, 2, 3, 4, 5];

const reduce = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (let a of iter) {
    acc = f(acc, a);
  }
  return acc;
};

log(reduce((a, b) => a + b, nums));
