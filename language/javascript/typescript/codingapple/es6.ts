function restFunc(...a: number[]) {
  console.log(a);
}

function userCommentAdmin({ user, comment, admin }: { user: string, comment: number[], admin: boolean }) {
  
}

function testfunction(a: string | undefined) {
  if (a && typeof a === "string") { // narrowing undefined or null
    
  } else {

  }
}

type Fish = { swim: string }
type Bird = { fly: string }

function animalFunc(animal: Fish | Bird) { // type alias narrowing
  if ("swim" in animal) {
    
  }  
}

let date = new Date();
if (date instanceof Date) {
  
}

type Cars = {
  wheel: "4개",
  color: string
}

type Bikes = {
  wheel: "2개",
  color: string
}

function testFunc3(x: Cars | Bikes) {
  if (x.wheel === "4개") {
    console.log("x는 car 타입~")
  }
}

// never type
// return 없어야 함
// endpoint가 없어야 함. 끝나지 않는 함수
// void로 대체할 수 있기 때문에 쓸모가 없음.
function function23(): never{ 
  while (1) {
    
  }
  throw new Error()
}

function function33(parameter: string) {
  if (typeof parameter === "string") {
    
  } else {
    console.log(parameter);
  }
}