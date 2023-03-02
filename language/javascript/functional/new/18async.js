import { go, log } from "./fx.js";

go(
  3,
  // Promise.resolve(3),
  (a) => a + 10,
  (a) => Promise.resolve(a + 100),
  (a) => a + 1000,
  (a) => a + 10000,
  log
);
