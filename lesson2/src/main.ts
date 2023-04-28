// explicit type
let myName: string = "Jhonnel";
let meaningOfLife: number;
let isLoading: boolean;
let album: any;

myName = "Rey";
meaningOfLife = 42;
isLoading = false;
album = 1213;

const sum = (a: string, b: number) => {
  return a + b;
};

// union type
let postID: string | number;
let isActive: number | boolean;

// regex
let re: RegExp = /\w+/g;
