"use strict";
// Utility types
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "compsci123",
    title: "Final Thesis",
    grade: 0,
};
console.log(updateAssignment(assign1, { grade: 96 }));
const assignGraded = updateAssignment(assign1, { grade: 87 });
console.log(assignGraded);
// Required and Readonly
const recordAssignment = (assign) => {
    // send to database
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
//Record Type
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};
const finalGrade = {
    Sara: "A",
    Kelly: "U",
};
const gradeData = {
    Sara: { assign1: 89, assign2: 96 },
    Kelly: { assign1: 76, assign2: 54 },
};
const score = {
    studentId: "Jhonnel",
    grade: 93,
};
const preview = {
    studentId: "James",
    verified: true,
};
// Return Type
// type NewAssign = {title: string, points: number}
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("Utility Types", 600);
console.log(tsAssign);
const assignArgs = ["Generics", 120];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
