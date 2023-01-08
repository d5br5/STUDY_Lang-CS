const log = console.log;

const apply1 = (f) => f(1);

const add2 = (a) => a + 2;

log(apply1(add2));

const times = (f, n) => {
	let i = -1;
	while (++i < n) f(i);
};

times((i) => log(i), 3);

times(log, 3);

const addMaker = (a) => (b) => a + b;

const add10 = addMaker(10);

log(add10(4));
