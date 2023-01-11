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

const take = curry((l, iter) => {
	let res = [];
	for (const a of iter) {
		res.push(a);
		if (res.length === l) return res;
	}
	return res;
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

L = {};

const isIterable = (a) => a && a[Symbol.iterator];

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

L.flatten = function* f(iter) {
	for (const a of iter) {
		if (isIterable(a)) {
			yield* L.flatten(a);
			// for (let b of L.flatten(a)) {
			// 	yield b;
			// }
		} else yield a;
	}
};

let arr = [[1, 2], 3, 4, [5, 6], [7, 8, 9]];

let it = L.flatten(arr);
// log([...it]);

const flatten = pipe(L.flatten, takeAll);
const map = curry(pipes(L.map, takeAll));
// log(flatten(arr));

L.flatMap = curry(pipes(L.map, L.flatten));

let fmIter = L.flatMap(
	map((a) => a * a),
	arr
);

// log(flatMap(L.range, [1, 2, 3]));
// log(flatten(arr));

const flatMap = pipes(map, flatten);
// log(flatMap((a) => a, arr));

const arr2 = [
	[1, 2],
	[3, 4, 5],
	[6, 7],
	[8, 9],
];

const add = (a, b) => a + b;

go(
	arr2,
	L.flatten,
	L.filter((a) => a % 2),
	take(4),
	reduce(add),
	log
);

const users = [
	{
		name: "a",
		age: 21,
		family: [
			{ name: "a1", age: 53 },
			{ name: "a2", age: 46 },
			{ name: "a3", age: 16 },
			{ name: "a4", age: 15 },
		],
	},
	{
		name: "b",
		age: 24,
		family: [
			{ name: "b1", age: 58 },
			{ name: "b2", age: 51 },
			{ name: "b3", age: 19 },
			{ name: "b4", age: 22 },
		],
	},
	{
		name: "c",
		age: 31,
		family: [
			{ name: "c1", age: 64 },
			{ name: "c2", age: 52 },
		],
	},
	{
		name: "d",
		age: 20,
		family: [
			{ name: "d1", age: 42 },
			{ name: "d2", age: 41 },
			{ name: "d3", age: 11 },
			{ name: "d4", age: 7 },
		],
	},
];

go(
	users,
	L.flatMap((u) => u.family),
	L.filter((u) => u.age < 20),
	L.map((u) => u.age),
	take(4),
	reduce(add),
	log
);
