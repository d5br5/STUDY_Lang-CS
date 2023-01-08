const { log } = console;

const products = [
	{ name: "반팔티", price: 15000 },
	{ name: "긴팔티", price: 25000 },
	{ name: "바지", price: 40000 },
	{ name: "후드티", price: 30000 },
	{ name: "핸드폰케이스", price: 15000 },
	{ name: "신발", price: 35000 },
];

const map = (f, iter) => {
	let res = [];
	for (const a of iter) {
		res.push(f(a));
	}
	return res;
};

const filter = (f, iter) => {
	let res = [];
	for (const a of iter) {
		if (f(a)) res.push(a);
	}
	return res;
};

const reduce = (f, acc, iter) => {
	if (!iter) {
		iter = acc[Symbol.iterator]();
		acc = iter.next().value;
	}
	for (let a of iter) {
		acc = f(acc, a);
	}
	return acc;
};

let result = reduce(
	(a, b) => a + b,
	filter(
		(a) => a <= 20000,
		map((p) => p.price, products)
	)
);

log(result);
