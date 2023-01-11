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

const go = (...args) => reduce((a, f) => f(a), args);

const pipe =
	(...fs) =>
	(a) =>
		go(a, ...fs);

const pipes =
	(f, ...fs) =>
	(...as) =>
		go(f(...as), ...fs);

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

const find = pipes(L.filter, take(1), ([a]) => a);
