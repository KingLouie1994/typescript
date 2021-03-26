type Combinable = number | string;
type Converter = "number" | "text";

const combine = (
  input1: Combinable,
  input2: Combinable,
  resultType: Converter
) => {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultType === "number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  //   if (resultType === "number") {
  //     return +result;
  //   } else if (resultType === "text") {
  //     return result.toString();
  //   }
};

const combinedAges = combine(26, 24, "number");
console.log(combinedAges);

const combinedStringAges = combine("26", "24", "number");
console.log(combinedStringAges);

const combinedWords = combine("Hello", "World", "text");
console.log(combinedWords);
