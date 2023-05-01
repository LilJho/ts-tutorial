"use strict";
// Index Signature
// interface TransactionObj {
//   readonly [index: string]: number;
// }
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    Troy: 23,
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);
let prop = "Pizza";
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
// todaysTransactions.Pizza = 50;
console.log(todaysTransactions["Troy"]);
const student = {
    name: "Jhonnel",
    GPA: 2.3,
    classes: [100, 200],
};
// console.log(student.test)
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map((key) => {
    console.log(student[key]);
});
const logStudent = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudent(student, "classes");
const monthlyIncome = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
};
for (const revenue in monthlyIncome) {
    console.log(`${revenue}: ${monthlyIncome[revenue]}`);
}
