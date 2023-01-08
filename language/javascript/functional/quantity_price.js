const { log } = console;

const curry =
	(f) =>
	(a, ..._) =>
		_.length ? f(a, ..._) : (..._) => f(a, ..._);
const map = curry((f, iter) => {
	let res = [];
	for (const a of iter) {
		res.push(f(a));
	}
	return res;
});

const filter = curry((f, iter) => {
	let res = [];
	for (const a of iter) {
		if (f(a)) res.push(a);
	}
	return res;
});

const reduce = curry((f, acc, iter) => {
	if (!iter) {
		iter = acc[Symbol.iterator]();
		acc = iter.next().value;
	}
	for (let a of iter) {
		acc = f(acc, a);
	}
	return acc;
});

const go = (...args) => reduce((a, f) => f(a), args);

const pipe =
	(f, ...fs) =>
	(...as) =>
		go(f(...as), ...fs);

const products = [
	{ name: "반팔티", price: 15000, quantity: 1 },
	{ name: "긴팔티", price: 25000, quantity: 2 },
	{ name: "바지", price: 40000, quantity: 3 },
	{ name: "후드티", price: 30000, quantity: 4 },
	{ name: "핸드폰케이스", price: 15000, quantity: 5 },
	{ name: "신발", price: 35000, quantity: 6 },
];

const add = (a, b) => a + b;

const sum = curry((f, iter) => go(iter, map(f), reduce(add)));

const total_quantity = sum((p) => p.quantity);

const totalQuantity = pipe(
	map((p) => p.quantity),
	reduce(add)
);

log(totalQuantity(products));
log(total_quantity(products));

const totalPrice = pipe(
	map((p) => p.price * p.quantity),
	reduce(add)
);
