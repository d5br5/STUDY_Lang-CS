class Person {
	name: string;
	constructor(name: string) {
		this.name = name;
	}
	myfunc(a: string): void {
		console.log(a);
	}

	myfunc2: (a: string) => "d";
}

let person1 = new Person("kim");

interface CarType {
	name: string;
	price: number;
}

class Car implements CarType {
	name: string;
	price: number;
	constructor(name: string, price: number) {
		this.name = name;
		this.price = price;
	}
	tax(): number {
		return this.price / 10;
	}
}

class Word {
	str: string[];
	num: number[];
	constructor(...rest: (string | number)[]) {
		for (let i = 0; i < rest.length; i++) {
			let now = rest[i];
			if (typeof now === "string") {
				this.str.push(now);
			} else {
				this.num.push(now);
			}
		}
	}
}

interface Square {
	color: string;
	width: number;
}
let nemo = { color: "red", width: 100 };

interface Student {
	name: string;
}
interface Student {
	address?: string;
}
interface Teacher extends Student {
	age: number;
}
let student: Student = { name: "kim" };
let teacher: Teacher = {
	name: "part",
	age: 33,
};

interface Merchandise {
	brand: string;
	serialNumber: number;
	model: string[];
}

interface Product {
	product: string;
	price: number;
}

interface OBJ {
	plus: (a: number, b: number) => number;
	minus: (a: number, b: number) => number;
}
