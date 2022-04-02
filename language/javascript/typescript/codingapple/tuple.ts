let mung: [string, boolean] = ["dog", true];

function restFn(...x: number[]) {}

let arr = [1, 2, 3];
let arr2: [number, number, ...number[]] = [4, 5, ...arr];

let ar11r: [string, number, ...boolean[]] = [
	"동서녹차",
	4000,
	true,
	false,
	true,
	true,
	false,
	true,
];

function gunggg(...x: [string, boolean, ...(number | string)[]]) {}
