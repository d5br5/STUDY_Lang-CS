const { log } = console;
const g = (a) => a + 1;
const f = (a) => a * a;

// log(f(g(1)));
// log(f(g()));

const go1 = (a, f) => (a instanceof Promise ? a.then(f) : f(a));

const curry =
	(f) =>
	(a, ..._) =>
		_.length ? f(a, ..._) : (..._) => f(a, ..._);

const reduce = curry((f, iter) => {
	iter = iter[Symbol.iterator]();
	let acc = iter.next().value;
	// for (let a of iter) {
	// 	// acc = f(acc, a);
	// 	acc = acc instanceof Promise ? acc.then((acc) => f(acc, a)) : f(acc, a);
	// }
	return go1(acc, function recur(acc) {
		for (let a of iter) {
			acc = f(acc, a);
			if (acc instanceof Promise) return acc.then(recur);
		}
		return acc;
	});
});

const take = curry((l, iter) => {
	let res = [];
	iter = iter[Symbol.iterator]();
	return (function recur() {
		let cur;
		while (!(cur = iter.next()).done) {
			const a = cur.value;
			if (a instanceof Promise)
				return a
					.then((a) => ((res.push(a), res).length == l ? res : recur()))
					.catch((e) => (e == nop ? recur() : Promise.reject(e)));
			res.push(a);
			if (res.length == l) return res;
		}
		return res;
	})();
});

const takeAll = take(Infinity);

const go = (...args) => reduce((a, f) => f(a), args);

const pipe =
	(...fs) =>
	(a) =>
		go(a, ...fs);

const pipes =
	(f, ...fs) =>
	(...as) =>
		go(f(...as), ...fs);

const range = (l) => {
	return Array.from({ length: l }, (_, i) => i);
};

// go(
// 	1,
// 	(a) => a + 10,
// 	(a) => Promise.resolve(a + 100),
// 	(a) => a + 10,
// 	(a) => a + 20,
// 	log
// );

const L = {};
const nop = Symbol("nop");

L.map = curry(function* (f, iter) {
	for (const a of iter) yield go1(a, f);
});

L.filter = curry(function* (f, iter) {
	for (const a of iter) {
		const b = go1(a, f);
		if (b instanceof Promise) {
			yield b.then((b) => (b ? a : Promise.reject(nop)));
		} else if (b) yield a;
	}
});

const map = curry(pipes(L.map, takeAll));

go(
	[Promise.resolve(3), Promise.resolve(2), Promise.resolve(1)],
	map((a) => Promise.resolve(a + 10)),
	takeAll,
	log
);
