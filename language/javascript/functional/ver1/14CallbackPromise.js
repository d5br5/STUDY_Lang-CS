const { log } = console;

function add10(a, callback) {
	setTimeout(() => callback(a + 10), 1000);
}

// add10(5, (res) => log(res));

function add20(a) {
	return new Promise((resolve) => {
		setTimeout(() => resolve(a + 20), 1000);
	});
}

// add20(5).then(log);

new Promise((resolve) => {
	setTimeout(() => resolve(20), 1000);
});

const go1 = (a, f) => (a instanceof Promise ? a.then(f) : f(a));

const add5 = (a) => a + 5;

const delay100 = (a) => new Promise((resolve) => setTimeout(() => resolve(a), 100));

log(go1(10, add5));
go1(go1(10, add5), log);

// go1(Promise.resolve(10), add5).then(log);
go1(go1(Promise.resolve(10), add5), log);

// go1(delay100(10), add5).then(log);
go1(go1(delay100(10), add5), log);
