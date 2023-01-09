const log = console.log;

function* gen() {
	yield 1;
	yield 2;
	return 100;
}

let iter = gen();

log(iter[Symbol.iterator]() == iter);

for (let a of iter) {
	log(a);
}

function* infinity(i = 0) {
	while (true) yield i++;
}

function* limit(l, iter) {
	for (const a of iter) {
		yield a;
		if (a == l) return;
	}
}

function* odds(l) {
	for (const a of limit(l, infinity(1))) {
		if (a % 2) yield a;
	}
}

let odd = odds(15);
for (const a of odds(11)) log(a);

// log(odd.next());
// log(odd.next());
// log(odd.next());
// log(odd.next());
// log(odd.next());
// log(odd.next());
// log(odd.next());

log(...odds(11));

const [head, ...tail] = odds(7);
log(head);
log(tail);
