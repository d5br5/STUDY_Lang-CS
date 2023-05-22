// public private protected static

class User {
  public name: string;
  private age: number;
  // class 안에서만 사용 가능. 인스턴스 사용 불가. extends시 자동 복사. 복사된 class에서 사용 불가
  private familyName: string = "kim"; 
  // private와 동일. extends 복사된 class에서 사용 가능
  protected x = 10; 
  constructor(a:string) {
    this.name = a + this.familyName;
  }
}

let user1 = new User("park");

class Person2{
  constructor(public name:string) {
    
  }
}
let kids = new Person2("kim");

class User3{
  static  x = 10; // 부모 class에 직접 부여됨
  y = 20;
}

let kid33 = new User3();

class User4{
  static skill = "js"
  intro = `${User4.skill} 전문가입니다.`;
}

let chulsoo23 = new User4();
User4.skill = "ts";
let shull32 = new User4();


class Square{
  x: number = Math.random();
  y: number = Math.random();
  constructor(public width: number, public height: number, public color: string) {
        
  }

  draw():void {
    
  }
}
let square = new Square(30, 30, "Red");

