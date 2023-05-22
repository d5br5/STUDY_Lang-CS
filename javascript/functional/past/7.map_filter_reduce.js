const { log } = console;

const products = [
	{ name: "반팔티", price: 15000 },
	{ name: "긴팔티", price: 25000 },
	{ name: "바지", price: 40000 },
	{ name: "후드티", price: 30000 },
	{ name: "핸드폰케이스", price: 15000 },
	{ name: "신발", price: 35000 },
];

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

let result = reduce(
	(a, b) => a + b,
	filter(
		(a) => a <= 20000,
		map((p) => p.price, products)
	)
);

log(result);

const go = (...args) => reduce((a, f) => f(a), args);

const pipe =
	(f, ...fs) =>
	(...as) =>
		go(f(...as), ...fs);

go(
	0,
	(a) => a + 1,
	(a) => a + 10,
	(a) => a + 100,
	log
);

const f = pipe(
	(a = 0, b = 0) => a + b,
	(a) => a + 10,
	(a) => a + 100
);

log(f());
const add = (a, b) => a + b;
const total_price = pipe(
	map((p) => p.price),
	reduce(add)
);

const base_total_price = (predi) => pipe(filter(predi), total_price);

go(
	products,
	base_total_price((p) => p.price < 20000),
	log
);

const multi = curry((a, b) => a * b);
log(multi(4)(5));
