function logText1(text: string) {
	text.split("").reverse().join("");
}

function logText<T>(text: T) {
	return text;
}

const str = logText<string>("abc");
const boolval = logText<boolean>(true);

// type limitation - extends

interface LengthType {
	length: number;
}

function logTextLength<T extends LengthType>(text: T): T {
	const leng = text.length;
	return text;
}

// type limitation - keyof

interface ShoppingItem {
	name: string;
	price: number;
	stock: number;
}

function getShoppingOption<T extends keyof ShoppingItem>(item: T): T {
	return item;
}

getShoppingOption("stock");
