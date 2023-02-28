export const log = console.log;

export const curry =
  (f) =>
  (a, ..._) =>
    _.length ? f(a, ..._) : (..._) => f(a, ..._);

export const map = curry((f, iter) => {
  let res = [];
  iter = iter[Symbol.iterator]();
  let cur;
  while (!(cur = iter.next()).done) {
    const a = cur.value;
    res.push(f(a));
  }
  return res;
});

export const filter = curry((f, iter) => {
  let res = [];
  iter = iter[Symbol.iterator]();
  let cur;
  while (!(cur = iter.next()).done) {
    const a = cur.value;
    if (f(a)) res.push(a);
  }
  return res;
});

export const reduce = curry((f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  } else {
    iter = iter[Symbol.iterator]();
  }
  let cur;

  while (!(cur = iter.next()).done) {
    const a = cur.value;
    acc = f(acc, a);
  }
  return acc;
});

export const take = curry((l, iter) => {
  let res = [];
  iter = iter[Symbol.iterator]();
  let cur;
  while (!(cur = iter.next()).done) {
    const a = cur.value;
    res.push(a);
    if (res.length === l) return res;
  }

  return res;
});

export const find = curry((f, iter) =>
  go(iter, L.filter(f), take(1), ([a]) => a)
);

export const go = (...args) => reduce((a, f) => f(a), args);

export const pipe =
  (f, ...fs) =>
  (...as) =>
    go(f(...as), ...fs);

export const range = (l) => {
  let i = -1;
  let res = [];
  while (++i < l) res.push(i);
  return res;
};

export const join = curry((sep = ",", iter) =>
  reduce((a, b) => `${a}${sep}${b}`, iter)
);

export const L = {};

L.range = function* (l) {
  let i = -1;
  while (++i < l) yield i;
};

L.map = curry(function* (f, iter) {
  // for (const a of iter) yield f(a);
  // yield* f(iter); -> f 가 generator가 아니므로 사용 불가
  iter = iter[Symbol.iterator]();
  let cur;
  while (!(cur = iter.next()).done) {
    const a = cur.value;
    yield f(a);
  }
});

L.filter = curry(function* (f, iter) {
  // for (const a of iter) if (f(a)) yield a;
  iter = iter[Symbol.iterator]();
  let cur;
  while (!(cur = iter.next()).done) {
    const a = cur.value;
    if (f(a)) yield a;
  }
});

L.entries = function* (obj) {
  for (const k in obj) yield [k, obj[k]];
};

const isIterable = (a) => a && a[Symbol.iterator];

L.flatten = function* (iter) {
  for (const a of iter) {
    if (isIterable(a)) yield* a;
    else yield a;
  }
};

L.deepFlat = function* f(iter) {
  for (const a of iter) {
    if (isIterable(a)) {
      // yield *f(a)
      for (const b of a) yield f(b);
    } else yield a;
  }
};

export const takeAll = take(Infinity);

export const Lmap = curry(pipe(L.map, takeAll));

export const Lfilter = curry(pipe(L.filter, takeAll));

export const flatten = pipe(L.flatten, takeAll);

L.flatMap = curry(pipe(L.map, L.flatten));

// const flatMap = curry(pipe(L.flatMap, takeAll));
const flatMap = curry(pipe(L.map, flatten));
