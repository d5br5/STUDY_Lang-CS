const { log } = console;

const products = [
	{ name: "반팔티", price: 15000 },
	{ name: "긴팔티", price: 25000 },
	{ name: "바지", price: 40000 },
	{ name: "후드티", price: 30000 },
	{ name: "핸드폰케이스", price: 15000 },
	{ name: "신발", price: 35000 },
];

const names = products.map((a) => a.name);

const map = (f, iter) => {
	let res = [];
	for (const a of iter) {
		res.push(f(a));
	}
	return res;
};

log(map((p) => p.name, products));
log(map((a) => a.price, products));

let m = new Map();
m.set("a", 10);
m.set("b", 20);

const it = m[Symbol.iterator]();
log(it.next());
log(it.next());

log(new Map(map(([k, v]) => [k, v * 2], m)));
