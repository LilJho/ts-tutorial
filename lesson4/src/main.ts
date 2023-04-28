// Type Aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type SoftwareEngineer = {
  name: string;
  isGraduate: boolean;
  StackAndExp?: stringOrNumberArray;
};

type userId = stringOrNumber;

// Literal types
let myName: "Jhonnel";

let userName: "Nicky" | "Jade" | "James";
userName = "Nicky";

// Functions
const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg("Hello Bitch");
logMsg(add(2, 8));

let subtract = function (c: number, d: number): number {
  return c - d;
};

type mathFunction = (a: number, b: number) => number;
// interface mathFunction {
//   (a:number, b: number): number
// }

let multiply: mathFunction = function (c, d) {
  return c * d;
};

logMsg(multiply(3, 2));

// Optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

// Default parameters
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c;
};

logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(2, 3, 10));
logMsg(sumAll(undefined, 2));

// Rest Parameters
const total = (...nums: number[]): number => {
  return nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(10, 2, 4));

// Never
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const infinite = () => {
  let i = 0;
  while (true) {
    i++;
    if (i > 100) break;
  }
};

// custom typeguard
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

// use of never type
const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "number";
  return createError("This should never happen!");
};
