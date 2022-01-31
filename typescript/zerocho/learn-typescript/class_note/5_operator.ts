// union type

function logMessage(value: string | number | boolean) {
	console.log(value);
}

logMessage("hello");
logMessage(100);

const arr3: Array<string | number> = ["no", 1];

interface Developer {
	name: string;
	skill: string;
}

interface Person {
	name: string;
	age: number;
}

function askSomeone(someone: Developer | Person) {
	someone.name;
}

var person: Person = { name: "ho", age: 1 };

askSomeone(person);

// intersection

var capt: Developer & Person = {
	name: "hjo",
	age: 11,
	skill: "s",
};
