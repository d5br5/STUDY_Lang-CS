interface StringOnly {
	age: number;
	[key: string]: string | number;
	[numkey: number]: string;
}

let user: StringOnly = {
	age: 13,
	name: "kim",
	0: "kim",
};

interface CSSType {
	"font-size": CSSType | number;
}

let css: CSSType = {
	"font-size": {
		"font-size": {
			"font-size": 14,
		},
	},
};

type FontType = {
	"font-size": number;
	[key: string]: number | FontType;
};

let objsss: FontType = {
	"font-size": 10,
	secondary: {
		"font-size": 12,
		third: {
			"font-size": 14,
		},
	},
};

let objsdsd = { name: "kim", age: 3 };
interface ObjPerson {
	[key: string]: number;
}

type PersonKeys = keyof ObjPerson;
let a1111111: PersonKeys = "age";

type CarTypess = {
	color: boolean;
	model: boolean;
	price: boolean | number;
};

type TypeChanger<T> = {
	[key in keyof T]: string;
};

type Agexz<T> = T extends string ? boolean : number;

type FirstItem<T> = T extends any[] ? T[0] : any;

type Persond<T> = T extends (infer R)[] ? R : unknown;
type adp = Persond<string[]>;
type adss = Persond<number[]>;

type Inferer<T> = T extends () => infer R ? R : unknown;
type skd = Inferer<() => number>;
type bs = ReturnType<() => void>;
