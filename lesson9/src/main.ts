// Utility types

// Partial
interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: "compsci123",
  title: "Final Thesis",
  grade: 0,
};

console.log(updateAssignment(assign1, { grade: 96 }));
const assignGraded: Assignment = updateAssignment(assign1, { grade: 87 });
console.log(assignGraded);

// Required and Readonly
const recordAssignment = (assign: Required<Assignment>): Assignment => {
  // send to database

  return assign;
};

const assignVerified: Readonly<Assignment> = {
  ...assignGraded,
  verified: true,
};

recordAssignment({ ...assignGraded, verified: true });

//Record Type
const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};

type Students = "Sara" | "Kelly";
type LetterGrades = "A" | "B" | "C" | "D" | "U";

const finalGrade: Record<Students, LetterGrades> = {
  Sara: "A",
  Kelly: "U",
};

interface Grades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<Students, Grades> = {
  Sara: { assign1: 89, assign2: 96 },
  Kelly: { assign1: 76, assign2: 54 },
};

// Pick and Omit

type AssignResult = Pick<Assignment, "studentId" | "grade">;

const score: AssignResult = {
  studentId: "Jhonnel",
  grade: 93,
};

type AssignPreview = Omit<Assignment, "grade" | "title">;

const preview: AssignPreview = {
  studentId: "James",
  verified: true,
};

// Exclude and Extract

type AdjustedGrade = Exclude<LetterGrades, "U">;

type HighGrades = Extract<LetterGrades, "A" | "B">;

// Nonullable
type AllPanels = "Jean" | "Rizza" | "Kristine" | undefined | null;

type NameOnly = NonNullable<AllPanels>;

// Return Type

// type NewAssign = {title: string, points: number}

const createNewAssign = (title: string, points: number) => {
  return { title, points };
};

type NewAssign = ReturnType<typeof createNewAssign>;

const tsAssign: NewAssign = createNewAssign("Utility Types", 600);
console.log(tsAssign);

// Parameters

type AssignParams = Parameters<typeof createNewAssign>;

const assignArgs: AssignParams = ["Generics", 120];

const tsAssign2: NewAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);

// Awaited - helps us with the ReturnType of the promise
