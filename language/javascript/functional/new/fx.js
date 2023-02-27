export const log = console.log;

export const map = (f, iter) => {
  let res = [];
  for (const a of iter) {
    console.log(a);
    res.push(f(a));
  }
  return res;
};

export const filter = (f, iter) => {
  let res = [];
  for (const a of iter) {
    if (f(a)) res.push(a);
  }
  return res;
};

export const reduce = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (let a of iter) {
    acc = f(acc, a);
  }
  return acc;
};
