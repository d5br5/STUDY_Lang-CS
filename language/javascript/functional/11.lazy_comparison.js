const { log } = console;

const curry =
	(f) =>
	(a, ..._) =>
		_.length ? f(a, ..._) : (..._) => f(a, ..._);

const go = (...args) => reduce((a, f) => f(a), args);

const pipe =
	(f, ...fs) =>
	(...as) =>
		go(f(...as), ...fs);

const reduce = curry((f, acc, iter) => {
	if (!iter) {
		iter = acc[Symbol.iterator]();
		acc = iter.next().value;
	} else {
		iter = iter[Symbol.iterator]();
	}
	let cur;
	while (!(cur = iter.next()).done) {
		const a = cur.value;
		acc = f(acc, a);
	}
	return acc;
});

const map = curry((f, iter) => {
	let res = [];
	iter = iter[Symbol.iterator]();
	let cur;
	while (!(cur = iter.next()).done) {
		const a = cur.value;
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

const range = (l) => {
	let i = -1;
	let res = [];
	while (++i < l) {
		res.push(i);
	}
	return res;
};

const take = curry((l, iter) => {
	let res = [];
	for (const a of iter) {
		res.push(a);
		if (res.length === l) return res;
	}
	return res;
});

go(
	range(10),
	map((m) => m + 10),
	filter((n) => n % 2),
	take(2),
	log
);

const L = {};

L.range = function* (l) {
	let i = -1;
	while (++i < l) yield i;
};

L.map = curry(function* (f, iter) {
	for (const a of iter) yield f(a);
});

L.filter = curry(function* (f, iter) {
	for (const a of iter) {
		if (f(a)) yield a;
	}
});

// go(
// 	L.range(10),
// 	L.map((m) => m + 10),
// 	L.filter((n) => n % 2),
// 	take(2),
// 	log
// );
