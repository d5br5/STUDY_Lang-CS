import { C, L, go, log, reduce } from "./fx.js";

const delay500 = (a) =>
  new Promise((resolve) => setTimeout(() => resolve(a), 500));

const add = (a, b) => a + b;
go(
  [1, 2, 3, 4, 5],
  L.map((a) => delay500(a * a)),
  L.filter((a) => a % 2),
  C.reduce(add),
  log
);
