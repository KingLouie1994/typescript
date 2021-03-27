const add = (num1: number, num2: number) => {
  return num1 + num2;
};

const printResult = (num: number): void => {
  console.log("Result " + num);
};

const addAndHandle = (
  num1: number,
  num2: number,
  cb: (num: number) => void
) => {
  const result = num1 + num2;
  cb(result);
};

printResult(add(7, 28));

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = 5 !!!ERROR!!!
// combineValues = printResult !!!ERROR!!!

console.log(combineValues(8, 8));

addAndHandle(10, 10, (result) => {
  console.log(result);
});
