import { find, log } from "./fx.js";

function add10(a, callback) {
  setTimeout(() => callback(a + 10), 100);
}

add10(5, (res) => {
  add10(res, (res) => {
    add10(res, (res) => {
      log(res);
    });
  });
});

function add20(a) {
  return new Promise((resolve) => setTimeout(() => resolve(a + 20), 100));
}

// add20(5).then(add20).then(add20).then(add20).then(add20).then(add20).then(log);

const go1 = (a, f) => (a instanceof Promise ? a.then(f) : f(a));
const add5 = (a) => a + 5;
const delay100 = (a) =>
  new Promise((resolve) => setTimeout(() => resolve(a), 100));

// log(go1(10, add5));

// log(go1(10, add5));

// log(go1(delay100(10), add5));

// const g = (a) => a + 1;

// const f = (a) => a * a;

console.clear();

// log(f(g(1)));
// log(f(g()));

// Array.of(1)
//   .map(g)
//   .map(f)
//   .forEach((r) => log(r));

// []
//   .map(g)
//   .map(f)
//   .forEach((r) => log(r));

// Promise.resolve(2)
//   .then(g)
//   .then(f)
//   .then((r) => log(r));

const users = [
  { id: 1, name: "aa" },
  { id: 2, name: "bb" },
  { id: 3, name: "cc" },
];

const getUserById = (id) =>
  find((u) => u.id === id, users) || Promise.reject("없어요!");

const f = ({ name }) => name;
const g = getUserById;
// const fg = (id) => f(g(id));

const fg = (id) => Promise.resolve(id).then(g).then(f);

fg(2).then(log);
