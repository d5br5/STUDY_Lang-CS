import { L, flatten, log, map } from "./fx.js";
let arr = [[1, 2], 3, 4, [5, 6], [7, 8, 9]];
const iter = flatten(arr);
log([...iter]);

let iter2 = L.flatMap(
  map((a) => a * a),
  arr
);
log(iter2.next());
