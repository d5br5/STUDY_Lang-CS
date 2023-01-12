const { log } = console;

const curry =
	(f) =>
	(a, ..._) =>
		_.length ? f(a, ..._) : (..._) => f(a, ..._);

const reduce = curry((f, iter) => {
	iter = iter[Symbol.iterator]();
	let acc = iter.next().value;
	for (let a of iter) {
		acc = f(acc, a);
	}
	return acc;
});
const go = (...args) => reduce((a, f) => f(a), args);

const pipe =
	(...fs) =>
	(a) =>
		go(a, ...fs);

const pipes =
	(f, ...fs) =>
	(...as) =>
		go(f(...as), ...fs);

const L = {};

L.range = function* (l) {
	let i = -1;
	while (++i < l) yield i;
};

L.map = curry(function* (f, iter) {
	for (const a of iter) yield f(a);
});

L.filter = curry(function* (f, iter) {
	for (const a of iter) if (f(a)) yield a;
});

const take = curry((l, iter) => {
	let res = [];
	for (const a of iter) {
		res.push(a);
		if (res.length === l) return res;
	}
	return res;
});

const takeAll = take(Infinity);

const map = curry(pipes(L.map, takeAll));
const filter = curry(pipes(L.filter, takeAll));

const join = curry((sep = ",", iter) => reduce((a, b) => `${a}${sep}${b}`, iter));

const queryStr = pipe(
	Object.entries,
	map(([k, v]) => `${k}=${v}`),
	join("&")
);

const query = {
	limit: 10,
	offset: 10,
	type: "notice",
};

log(queryStr(query));

const users = [
	{ age: 32 },
	{ age: 31 },
	{ age: 37 },
	{ age: 28 },
	{ age: 25 },
	{ age: 32 },
	{ age: 34 },
	{ age: 37 },
];

const find = pipes(L.filter, take(1), ([a]) => a);

log(find((u) => u.age < 32, users));
