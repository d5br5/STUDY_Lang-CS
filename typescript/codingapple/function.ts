function myfunction(x: number | string) {
  if (typeof x === "string") {
    return "none"
  } else {
    return x + 1;  
  }  
}

myfunction(2);
myfunction("string");

function hello(name?: string): void {
	if (name === undefined) {
		console.log("hi");
	} else {
		console.log("noname");
	}
}

function myfunction2(x: number | string) {
  let array: number[] = [];
  array[0] = x as number;
  return array;
}

console.log(myfunction2("s")); // 이러면 안됨

function cleanArray(arr: (string | number)[]): number[] {
  return arr.map(a => {
    if (typeof a === "string") {
      return parseInt(a);
    } else {
      return a;
    }
  })
};

let chulsoo2 = { subject: "math" };
let younghee = { subject: ["science", "english"] };
let minsoo = { subject: ["science", "art", "korean"] };

function subFilter(obj: { subject: string | string[] }): string {
  if (typeof obj.subject === "string") {
    return obj.subject;
  } else {
    return obj.subject[obj.subject.length - 1];
  }
}