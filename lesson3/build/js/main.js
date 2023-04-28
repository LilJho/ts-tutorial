"use strict";
let stringArr = ["Yna", "Patricia", "Jinni"];
let idolsArr = ["Dahyun", "Gdragon", "Momo", 3];
let mixedData = ["EVH", 1987, true];
stringArr[0] = "John";
stringArr.push("Hey");
idolsArr[0] = 1082;
idolsArr.unshift("Jimmy");
let test = [];
let bands = [];
test = bands;
bands.push("Van Halen");
//Tuple
let myTuple = ["Kobe", 24, true];
let mixed = ["James", 13, false];
myTuple[1] = 12;
// Object
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
let exampleObj = {
    prop1: "Jhonnel",
    prop2: 21,
};
exampleObj.prop1 = "Seo Joon";
let person1 = {
    name: "Jhonnel",
    isGraduate: true,
    StackAndExp: ["Typescript", "REACT", "NEXT.JS", 2],
};
let person2 = {
    name: "Jericho",
    isGraduate: false,
};
const greetSoftwareEngineer = (softwareEngineer) => {
    return `Hello Software Engineer ${softwareEngineer.name.toUpperCase()}`;
};
console.log(greetSoftwareEngineer(person1));
// Enums
var grade;
(function (grade) {
    grade[grade["U"] = 0] = "U";
    grade[grade["D"] = 1] = "D";
    grade[grade["C"] = 2] = "C";
    grade[grade["B"] = 3] = "B";
    grade[grade["A"] = 4] = "A";
})(grade || (grade = {}));
console.log(grade.U);
