interface Ironman {
	name: string;
}

class Avengers {
	name: string;
}

let i: Ironman;
i = new Avengers();

interface DeveloperIn {
	name: string;
	skill: string;
}

interface PersonIn {
	name: string;
}

// 부족하면 안됨. 넘쳐도 됨.

var persona: PersonIn;
var developera: DeveloperIn;
persona = developera;

var add12 = function (a: number) {};

var sum12 = function (a: number, b: number) {};

sum12 = add12;
// add12 = sum12;

interface Empty<T> {}

interface NotEmpth<T> {}

var empty12: Empty<string>;
var empty21: Empty<number>;

empty12 = empty21;
empty21 = empty12;
