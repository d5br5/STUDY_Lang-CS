import { L, Lfilter, Lmap, go, log, map, reduce, take } from "./fx.js";

// go(
//   [Promise.resolve(1), 2, 3, Promise.resolve(4)],
//   Lmap((a) => Promise.resolve(a + 10)),
//   // take(4),
//   log
// );

// go(
//   [Promise.resolve(1), Promise.resolve(2), 3, 4, 5, 6],
//   L.map((a) => Promise.resolve(a * a)),
//   Lfilter((a) => a % 2),
//   L.map((a) => Promise.resolve(a * a)),
//   L.map((a) => Promise.resolve(a * a)),
//   take(3),
//   log
// );

const add = (a, b) => a + b;

go(
  [1, 2, 3, 4, 5, 6, 7, 8],
  L.map((a) => {
    log(a);
    return new Promise((resolve) => setTimeout(() => resolve(a * a), 1000));
  }),
  L.filter((a) => a % 2),
  take(3),
  // reduce(add),
  log
);
