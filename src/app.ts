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
