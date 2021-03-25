// const person: {
//   name: string;
//   age: number;
// }
const person = {
  name: "Luis",
  age: 26,
  hobbies: ["Coding", "Golf"],
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
//   console.log(hobby.map()) !!! ERROR !!!
}
