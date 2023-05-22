import { log } from "./fx.js";

const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 },
];

const map = (f, iter) => {
  let res = [];
  for (const a of iter) {
    console.log(a);
    res.push(f(a));
  }
  return res;
};

log(map((p) => p.name, products));

function* gen() {
  yield 2;
  if (false) yield 3;
  yield 4;
}

log(map((a) => a * a, gen()));

let m = new Map();
m.set("a", 10);
m.set("b", 20);

log(new Map(map(([k, v]) => [k, v * 2], m)));
