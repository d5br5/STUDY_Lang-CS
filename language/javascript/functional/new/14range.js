import { go, log, map, reduce, take, L, filter } from "./fx.js";

const range = (l) => {
  let i = -1;
  let res = [];
  while (++i < l) res.push(i);
  return res;
};

log(range(5));

go(
  L.range(5),
  reduce((a, b) => a + b),
  log
);

console.clear();

go(
  L.range(Infinity),
  L.map((n) => n + 10),
  L.filter((n) => n % 2),
  take(20),
  log
);
