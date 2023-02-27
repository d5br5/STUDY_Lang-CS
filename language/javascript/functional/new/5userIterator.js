import { log } from "./fx.js";

const iterable = {
  [Symbol.iterator]() {
    let i = 3;
    return {
      next() {
        return i === 0 ? { done: true } : { value: i--, done: false };
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  },
};

let iterator = iterable[Symbol.iterator]();

log(iterator.next());
for (let a of iterator) log(a);

// log(iterator.next());
// log(iterator.next());
// log(iterator.next());
// log(iterator.next());
