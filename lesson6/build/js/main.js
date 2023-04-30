"use strict";
class Developer {
    constructor(name, music, age, lang = "Typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const Jhonnel = new Developer("Jhonnel", "Kpop", 69);
console.log(Jhonnel.getAge());
// console.log(Jhonnel.age);
// console.log(Jhonnel.lang);
class WebDev extends Developer {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write in ${this.lang}`;
    }
}
const Leo = new WebDev("Asus", "Leonardo", "Lofi", 43);
console.log(Leo.getLang());
class NewFarmer {
    constructor(name, expertise) {
        this.name = name;
        this.expertise = expertise;
    }
    work(action) {
        return `${this.name} is expert at ${this.expertise} and still ${action}`;
    }
}
const Noel = new NewFarmer("Noel", "Drinking Alcohol");
console.log(Noel.work("Lazy as fuck"));
////////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const Nicky = new Peeps("Nicky");
const Jade = new Peeps("Jade");
const James = new Peeps("James");
console.log(James.id);
console.log(Nicky.id);
console.log(Jade.id);
console.log(Peeps.count);
/////////////////////////////////////////
class ComSci {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((val) => typeof val === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Param is not Array of Strings");
    }
}
const CSB1 = new ComSci();
CSB1.data = ["Jhonnel", "Ivan", "Mars"];
console.log(CSB1.data);
CSB1.data = [...CSB1.data, "Leandro"];
console.log(CSB1.data);
