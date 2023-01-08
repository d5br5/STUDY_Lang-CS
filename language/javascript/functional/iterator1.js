const log = console.log;

const list = [1, 2, 3];
const str = "abc";

for (const a of str) {
	log(a);
}

log(list[Symbol.iterator]);

let iterator = list[Symbol.iterator]();
log(iterator);
log(iterator.next());
log(iterator.next());
log(iterator.next());
log(iterator.next());

let set = new Set([1, 2, 3]);
let setIter = set[Symbol.iterator]();

log(setIter);

let map = new Map([
	["a", 1],
	["b", 2],
]);

let mapIter = map[Symbol.iterator]();
log(mapIter);
