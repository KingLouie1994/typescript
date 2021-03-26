let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Luis";

if (typeof userInput === "string") {
  userName = userInput;
}

const generateError = (message: string, code: number): never => {
  throw { message: message, code: code };
};

generateError("An error occured!", 500);
