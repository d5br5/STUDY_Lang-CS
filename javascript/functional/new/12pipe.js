import { log, go } from "./fx.js";
const pipe =
  (f, ...fs) =>
  (...as) =>
    go(f(...as), ...fs);

const f = pipe(
  (a, b) => a,
  (a) => a + 10,
  (a) => a + 100
);

log(f(3, 4));
