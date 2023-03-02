export const log = console.log;

const isIterable = (a) => a && a[Symbol.iterator];

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

const go1 = (a, f) => (a instanceof Promise ? a.then(f) : f(a));

const nop = Symbol("nop");

const reduceF = (acc, a, f) =>
  a instanceof Promise
    ? a.then(
        (a) => f(acc, a),
        (e) => (e === nop ? acc : Promise.reject(e))
      )
    : f(acc, a);

const head = (iter) => go1(take(1, iter), ([h]) => h);

export const reduce = curry((f, acc, iter) => {
  if (!iter) return reduce(f, head((iter = acc[Symbol.iterator]())), iter);

  iter = iter[Symbol.iterator]();
  return go1(acc, function recur(acc) {
    let cur;
    while (!(cur = iter.next()).done) {
      acc = reduceF(acc, cur.value, f);
      // acc = acc instanceof Promise ? acc.then((acc) => f(acc, a)) : f(acc, a);
      if (acc instanceof Promise) {
        console.log("promise");
        return acc.then(recur);
      }
    }
    return acc;
  });
});

export const take = curry((l, iter) => {
  let res = [];
  iter = iter[Symbol.iterator]();
  return (function recur() {
    let cur;
    while (!(cur = iter.next()).done) {
      const a = cur.value;
      if (a instanceof Promise)
        return a
          .then((a) => ((res.push(a), res).length === l ? res : recur()))
          .catch((e) => (e === nop ? recur() : Promise.reject(e)));
      res.push(a);
      if (res.length === l) return res;
    }
    return res;
  })();
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
    yield go1(a, f);
  }
});

L.filter = curry(function* (f, iter) {
  // for (const a of iter) if (f(a)) yield a;
  iter = iter[Symbol.iterator]();
  let cur;
  while (!(cur = iter.next()).done) {
    const a = cur.value;
    const b = go1(a, f);
    if (b instanceof Promise)
      yield b.then((b) => (b ? a : Promise.reject(nop)));
    else if (b) yield a;
  }
});

L.entries = function* (obj) {
  for (const k in obj) yield [k, obj[k]];
};

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

// export const flatMap = curry(pipe(L.flatMap, takeAll));
export const flatMap = curry(pipe(L.map, flatten));

function noop() {}
const catchNoop = ([...arr]) => (
  arr.forEach((a) => (a instanceof Promise ? a.catch(noop) : a)), arr
);

export const C = {};

// catch가 된 promise를 전달하면 이후에 다시 catch를 하여 처리할 수 없음
// catch가 되지 않은 p 를 전달하되, 한번 catch를 해주는것
// iter2 = iter2.map(a=>a.catch(function(){}))
C.reduce = curry((f, acc, iter) =>
  iter ? reduce(f, acc, catchNoop(iter)) : reduce(f, catchNoop(acc))
);

C.take = curry((l, iter) => take(l, catchNoop(iter)));

C.takeAll = C.take(Infinity);

C.map = curry(pipe(L.map, C.takeAll));

C.filter = curry(pipe(L.filter, C.takeAll));
