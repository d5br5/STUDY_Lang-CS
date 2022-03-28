type Animal = string | number | undefined;
type AnimalInfo = { name: string, age: number };
let animals: Animal;

type Address = {
  readonly region: { // 깊은 방지는 안됨. 
    name: string
  }
  name ?: string
}
const address: Address = { region: { name: "seoul"} };
address.region.name = "busan";


type PositionX = { x: number, z:number };
type PositionY = { y: number , z:number};
type PositionXandY = PositionX & PositionY; // extend
type PositionXorY = PositionX | PositionY; // union

const xy: PositionXandY = {
  x: 1, y:1, z:2
}

type Homework = {
  color?: string, 
  size: number,
  position: number[]
}

type Info = {
  name: string, 
  phone: number,
  email : string
}

type Child = Info & { ischild: boolean };

// literal type

let name3: "kim";
name3 = "kim";

let obj = {
  name: "paper"
} as const

type RockSciPaper = "rock" | "scissors" | "paper"

function RCP(hand: RockSciPaper): RockSciPaper[] {
  let result : RockSciPaper[] = ["rock", obj.name];
  return result;
}

type FunctionAlias = (name: string) => number;
let aliasFunction:FunctionAlias = function (a) {
  return 3
}

type MemberInfo = {
  name: string,
  plusone : (x : string) =>number
}
let memberInfo:MemberInfo = {
  name: "kim",
  plusone(a:string) {
    return 2
  }
}
memberInfo.plusone("d");

type CZtype = (str: string) => string;
let cutZero:CZtype = function(str){
  if (str[0] === "0") return str.slice(1);
  return str;
};
type RDtype = (str: string) => number;
let removeDash:RDtype = function (str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++){
    if(str[i]!=="-") newStr += str[i]
  }
  // let result = x.replace(/-/g, "");
  return parseInt(newStr);
}
  
function callbacktest(phone: string, cz: CZtype, rd: RDtype):number {
  return rd(cz(phone));
}