class Developer {
  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "Typescript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `Hello, I'm ${this.age}`;
  }
}

const Jhonnel = new Developer("Jhonnel", "Kpop", 69);
console.log(Jhonnel.getAge());
// console.log(Jhonnel.age);
// console.log(Jhonnel.lang);

class WebDev extends Developer {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  public getLang(): string {
    return `I write in ${this.lang}`;
  }
}

const Leo = new WebDev("Asus", "Leonardo", "Lofi", 43);
console.log(Leo.getLang());
// console.log(Leo.age)
// console.log(Leo.lang)
////////////////////////////////////////////////////////

interface Farmer {
  name: string;
  expertise: string;
  work(action: string): string;
}

class NewFarmer implements Farmer {
  name: string;
  expertise: string;
  constructor(name: string, expertise: string) {
    this.name = name;
    this.expertise = expertise;
  }

  work(action: string): string {
    return `${this.name} is expert at ${this.expertise} and still ${action}`;
  }
}

const Noel = new NewFarmer("Noel", "Drinking Alcohol");
console.log(Noel.work("Lazy as fuck"));
////////////////////////////////////////////

class Peeps {
  static count: number = 0;
  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const Nicky = new Peeps("Nicky");
const Jade = new Peeps("Jade");
const James = new Peeps("James");

console.log(James.id);
console.log(Nicky.id);
console.log(Jade.id);
console.log(Peeps.count);

/////////////////////////////////////////
class ComSci {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((val) => typeof val === "string")) {
      this.dataState = value;
      return;
    } else throw new Error("Param is not Array of Strings");
  }
}

const CSB1 = new ComSci();
CSB1.data = ["Jhonnel", "Ivan", "Mars"];
console.log(CSB1.data);
CSB1.data = [...CSB1.data, "Leandro"];
console.log(CSB1.data);
