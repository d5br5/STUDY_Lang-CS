// interface

interface User {
	age: number;
	name: string;
}

const seho: User = { age: 33, name: "세호" };

const getUser = (user: User): void => console.log(user);

getUser(seho);

// function

interface SumFn {
	(a: number, b: number): number;
}

function sum(a: number, b: number): number {
	return a + b;
}

const sumFunction: SumFn = (a: number) => a;

const sumFunction2: SumFn = function (a: number, b: number) {
	return a + b;
};

// indexing

interface StringArray {
	[indexs: number]: string;
}

let arr1: StringArray = ["a", "b"];

// dictionary

interface StringRegex {
	[key: string]: RegExp;
}

let obj1: StringRegex = {
	css: /abc/,
};

let obj2: StringArray = {
	1: "d",
};

// inheritance

interface Person {
	name: string;
	age: number;
}

interface Developer extends Person {
	language: string;
}

const capt: Developer = {
	language: "python",
	age: 11,
	name: "son",
};
