import { log } from "./fx.js";

function* gen() {
  yield 1;
  yield 2;
  yield 3;
  return 4; // done:true 가 출력되기 시작할 때의 value 값
}

let iter = gen();
log(iter);
log(iter[Symbol.iterator]() === iter);

log(iter.next());
log(iter.next());
log(iter.next());
log(iter.next());

for (const a of gen()) log(a);

console.clear();

function* limit(l, iter) {
  for (let a of iter) {
    yield a;
    if (a === l) return;
  }
}

function* infinity(i = 0) {
  while (true) yield ++i;
}

function* odds(l) {
  for (let a of limit(l, infinity())) {
    if (a % 2) yield a;
  }
}

let oddIter = odds(8);
log(oddIter.next());
log(oddIter.next());
log(oddIter.next());
log(oddIter.next());
log(oddIter.next());
log(oddIter.next());
