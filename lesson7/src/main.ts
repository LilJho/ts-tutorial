// Index Signature

interface TransactionObj {
  readonly [index: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
}

// interface TransactionObj {
//   readonly [index: string]: number;
// }

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
  Troy: 23,
};

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);

let prop: string = "Pizza";
console.log(todaysTransactions[prop]);

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
};
console.log(todaysNet(todaysTransactions));

// todaysTransactions.Pizza = 50;

console.log(todaysTransactions["Troy"]);

///////////////////////////////////////////////
interface Student {
  // [index: string]: string | number | number[] | undefined
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: "Jhonnel",
  GPA: 2.3,
  classes: [100, 200],
};

// console.log(student.test)

for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`);
}

Object.keys(student).map((key) => {
  console.log(student[key as keyof typeof student]);
});

const logStudent = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
};

logStudent(student, "classes");

///////////////////////////
// interface Income {
//   [index: string]: number
// }

type Stream = "salary" | "bonus" | "sidehustle";

type Income = Record<Stream, number | string>;

const monthlyIncome: Income = {
  salary: 500,
  bonus: 100,
  sidehustle: 250,
};

for (const revenue in monthlyIncome) {
  console.log(`${revenue}: ${monthlyIncome[revenue as keyof Income]}`);
}
