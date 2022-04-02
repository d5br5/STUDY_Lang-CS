// local module
export {};
declare global {
	type Dog = string;
}

let names: string = "kim";
let age: Age = 50;
let marry: boolean = true;
let undefin: undefined = undefined;
let nul = null;

type MemberType = { name: string; address: string; age: number };
let member: (string | number)[] = ["kim", "park", 1];
let members: MemberType = {
	name: "kim",
	address: "seoul",
	age: 1,
};

type ProjectType = {
	member: string[];
	days: number;
	started: boolean;
};
let project: ProjectType = {
	member: ["kim", "park"],
	days: 30,
	started: true,
};

let ants: unknown = "string";
let var1: unknown = ants;

let user: string = "kim";
let age1: number | undefined = undefined;
let married: boolean = false;
let chulsoo: [string, number | undefined, boolean] = [user, age1, married];

let school: {
	score: (number | boolean)[];
	teacher: string;
	friend: string | string[];
} = {
	score: [100, 97, 876],
	teacher: "phil",
	friend: "john",
};
school.score[4] = false;
school.friend = ["Lee", school.teacher];
