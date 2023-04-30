"use strict";
// Convert to more or less specific
let a = "hello";
let b = a; // less specific
let c = a; // more specific
// Does not work with React
let d = "world";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 5, "concat");
// Be careful! TS sees no problem - but a string is returned
let nextVal = addOrConcat(2, 2, "concat");
// 10 as string; this one is error because typescript checks it and you can fix it by using the below solution
// Force casting or Double casting
10;
// The DOM
let img = document.querySelector("img");
let myImg = document.getElementById("#img");
let nextImg = document.getElementById("#img");
img.src;
myImg.src;
