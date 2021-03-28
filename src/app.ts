interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (num1: number, num2: number) => {
  return num1 + num2;
};

interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user1: Greetable;
user1 = new Person("Luis", 26);
// user1.name = "Louise"; !!!ERROR!!! Because of readonly
console.log(user1);
user1.greet("Hi there - I'm");
