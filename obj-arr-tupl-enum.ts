// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Luis",
//   age: 26,
//   hobbies: ["Coding", "Golf"],
//   role: [2, "author"],
// };

// Does not work because of type
// person.role[1] = 10;
// person.role = [];

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Luis",
  age: 26,
  hobbies: ["Coding", "Golf"],
  role: Role.ADMIN,
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  //   console.log(hobby.map()) !!! ERROR !!! because of type
}

if (person.role === Role.AUTHOR) {
  console.log("I am an Author");
}
