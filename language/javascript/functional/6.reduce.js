const { log } = console;

const nums = [1, 2, 3, 4, 5];

// let total = 0;
// for (let a of nums) total += a;
// log(total);

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

log(reduce((a, b) => a + b, nums));

const products = [
	{ name: "반팔티", price: 15000 },
	{ name: "긴팔티", price: 25000 },
	{ name: "바지", price: 40000 },
	{ name: "후드티", price: 30000 },
	{ name: "핸드폰케이스", price: 15000 },
	{ name: "신발", price: 35000 },
];

log(reduce((price, product) => price + product.price, 0, products));
