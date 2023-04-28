let stringArr = ["Yna", "Patricia", "Jinni"];

let idolsArr = ["Dahyun", "Gdragon", "Momo", 3];

let mixedData = ["EVH", 1987, true];

stringArr[0] = "John";
stringArr.push("Hey");

idolsArr[0] = 1082;
idolsArr.unshift("Jimmy");

let test = [];
let bands: string[] = [];
test = bands;
bands.push("Van Halen");

//Tuple
let myTuple: [string, number, boolean] = ["Kobe", 24, true];
let mixed = ["James", 13, false];

myTuple[1] = 12;

// Object
let myObj: object;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};

let exampleObj = {
  prop1: "Jhonnel",
  prop2: 21,
};

exampleObj.prop1 = "Seo Joon";

interface SoftwareEngineer {
  name: string;
  isGraduate: boolean;
  StackAndExp?: (string | number)[];
}

let person1: SoftwareEngineer = {
  name: "Jhonnel",
  isGraduate: true,
  StackAndExp: ["Typescript", "REACT", "NEXT.JS", 2],
};

let person2: SoftwareEngineer = {
  name: "Jericho",
  isGraduate: false,
};

const greetSoftwareEngineer = (softwareEngineer: SoftwareEngineer) => {
  return `Hello Software Engineer ${softwareEngineer.name.toUpperCase()}`;
};

console.log(greetSoftwareEngineer(person1));

// Enums
enum grade {
  U,
  D,
  C,
  B,
  A,
}

console.log(grade.U);
