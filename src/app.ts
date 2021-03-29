function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge(
  { name: "Luis", hobbies: ["Golf", "Coding"] },
  { age: 26 }
);
console.log(mergedObj);


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
