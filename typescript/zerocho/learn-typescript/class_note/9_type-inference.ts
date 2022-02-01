// basic

interface Contact {
	phone: number;
}

var a = { phone: 1123 };

function getB(b: number = 10) {
	return b + "c";
}

// basic 2

interface Dropdown<T> {
	value: T;
	title: string;
}

var shoppingItem: Dropdown<string> = {
	value: "jean",
	title: "jeantitle",
};

interface DetailedDropdown<K> extends Dropdown<K> {
	description: string;
	tag: K;
}

var detailedItem: DetailedDropdown<string> = {
	title: "name",
	value: "number",
	description: "good",
	tag: "tagname",
};

// best common type

// let arr: Array<number | string | boolean> = [0, 1, null, undefined, "s", true];
let arr: (number | string | boolean)[] = [0, 1, null, undefined, "s", true];
