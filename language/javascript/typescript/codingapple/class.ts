class Person {
  name:string;
  constructor(name:string) {
    this.name = name
  }
  myfunc(a: string): void{
    console.log(a);
  }

  myfunc2: (a:string) => "d" ;
}

let person1 = new Person("kim");

class Car{
  name: string;
  price: number;
  constructor(name:string, price:number) {
    this.name = name;
    this.price = price;
  }
  tax(): number{
    return this.price / 10;
  }
}

class Word{
  str: string[];
  num: number[];
  constructor(...rest: (string | number)[]) {
    for (let i = 0; i < rest.length; i++){
      let now = rest[i];
      if (typeof now === "string") {
        this.str.push(now)
      } else  {
        this.num.push(now);
      } 
    }
  }
}
