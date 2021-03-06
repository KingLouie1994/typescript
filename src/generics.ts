// const names: Array<string> = ["Luis", "Louise"];
// // names[0].split(" ");

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 2000);
// });

// promise.then((data) => {
//   data.split("");
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge(
  { name: "Luis", hobbies: ["Golf", "Coding"] },
  { age: 26 }
);
console.log(mergedObj);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let description = "Got no value.";
  if (element.length === 1) {
    description = `Got 1 element`;
  } else if (element.length > 1) {
    description = `Got ${element.length} elements`;
  }
  return [element, description];
}

console.log(countAndDescribe("Hello World!"));
console.log(countAndDescribe(["Golf", "Coding"]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value: ${obj[key]}`;
}

console.log(extractAndConvert({ name: "Luis" }, "name"));

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Luis");
textStorage.addItem("Louise");
textStorage.removeItem("Luis");
console.log(textStorage.getItems());

// const objStorage = new DataStorage<object>();
// objStorage.addItem({ name: "Luis" });
// objStorage.addItem({ name: "Louise" });
// objStorage.removeItem({ name: "Luis" });
// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["Luis", "Louise"];
// names.push("Emily"); not allowed because of Readonly
