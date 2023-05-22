import { log } from "./fx.js";

log("-----Arr-----");
const arr = [1, 2, 3];
// log(arr);
// log(arr[Symbol.iterator]);
// for (const a of arr) log(a);

// let iter1 = arr[Symbol.iterator]();
// for (const a of iter1) log(a);

let iter2 = arr[Symbol.iterator]();
let now = iter2.next();
while (!now.done) {
  log(now.value);
  now = iter2.next();
}

log("-----Set-----");
const set = new Set([1, 2, 3]);
// log(set);
// log(set[Symbol.iterator]);
// for (const a of set) log(a);

log("-----Map-----");
const map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

map.keys(); // MapIterator;
map.values(); // MapIterator;
map.entries(); // MapIterator;

// map.entries 와 근본적으로 같음
// MapIterator;
map[Symbol.iterator]();

let mapIter = map[Symbol.iterator]();
let mapIterIter = mapIter[Symbol.iterator]();

// true
// iterable은 자기 자신을 iterator로 가짐
mapIter === mapIterIter;

// log(map);
// log(map[Symbol.iterator]);
// for (const a of map) log(a);
