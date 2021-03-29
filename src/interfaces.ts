interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (num1: number, num2: number) => {
  return num1 + num2;
};

interface Named {
  readonly name?: string;
  gender?: string; // Optional
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age: number;

  constructor(a: number, n?: string) {
    if (n) {
      this.name = n;
    }
    this.age = a;
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log(`I am ${this.age} years old`);
    }
  }
}

let user1: Greetable;
user1 = new Person(26, "Luis");
// user1.name = "Louise"; !!!ERROR!!! Because of readonly
console.log(user1);
user1.greet("Hi there - I'm");
