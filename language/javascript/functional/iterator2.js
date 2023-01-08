const log = console.log;

const iterable = {
	[Symbol.iterator]() {
		let i = 3;

		return {
			next() {
				return i === 0 ? { done: true } : { done: false, value: i-- };
			},
			[Symbol.iterator]() {
				return this;
			},
		};
	},
};

const iter = iterable[Symbol.iterator]();

log(iter.next());
// log(iter.next());
// log(iter.next());
// log(iter.next());

for (const a of iter) log(a);
