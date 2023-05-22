function myfunnc333<T extends number>(x: T): number {
  return x + 1;
}

interface LengthCheck {
  length: number
}

function mufff33<T extends LengthCheck>(x: T) {
  return x.length
}

let a = mufff33<string>("d");

function hw1<T extends string | string[]>(x: T) {
  return x.length;
}

interface Animal333{
  name: string; 
  age: number;
}

let data = '{"name":"dog", "age":1}';

function parseAnimal(data:string):Animal333 {
  let converted = JSON.parse(data);
  return converted;
}

let result = parseAnimal(data);