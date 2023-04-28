"use strict";
// Literal types
let myName;
let userName;
userName = "Nicky";
// Functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hello Bitch");
logMsg(add(2, 8));
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction {
//   (a:number, b: number): number
// }
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(3, 2));
// Optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
// Default parameters
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(2, 3, 10));
logMsg(sumAll(undefined, 2));
// Rest Parameters
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(10, 2, 4));
// Never
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 0;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// custom typeguard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
// use of never type
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (isNumber(value))
        return "number";
    return createError("This should never happen!");
};
