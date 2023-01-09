const { log } = console;

const curry =
	(f) =>
	(a, ..._) =>
		_.length ? f(a, ..._) : (..._) => f(a, ..._);

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

const range = (l) => {
	return Array.from({ length: l }, (_, i) => i);
};

log(range(3));

const add = (a, b) => a + b;

log(reduce(add, range(4)));

// lazy range;

const L = {};
L.range = function* (l) {
	let i = -1;
	while (++i < l) yield i;
};

let list = L.range(4);
log(list);
log(reduce(add, list));

function test(name, time, f) {
	console.time(name);
	while (time--) f();
	console.timeEnd(name);
}

// test("range", 10, () => reduce(add, range(1000000)));
// test("L.range", 10, () => reduce(add, L.range(1000000)));

const take = curry((l, iter) => {
	let res = [];
	for (const a of iter) {
		res.push(a);
		if (res.length === l) return res;
	}
	return res;
});

go(L.range(10000), take(5), reduce(add), log);

log(take(5, L.range(100)));
