const echo = <T>(arg: T): T => arg;

const isObject = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

console.log(isObject(true));
console.log(isObject("John"));
console.log(isObject([1, 2, 3]));
console.log(isObject({ name: "Jhonnel" }));
console.log(isObject(null));

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }
  if (isObject(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false };
  }
  return { arg, is: !!arg };
};

console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue("Jhonnel"));
console.log(isTrue(""));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({ name: "Jhonnel" }));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));

interface Boolcheck<T> {
  value: T;
  is: boolean;
}

const checkBoolValue = <T>(arg: T): Boolcheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false };
  }
  if (isObject(arg) && !Object.keys(arg as keyof T).length) {
    return { value: arg, is: false };
  }
  return { value: arg, is: !!arg };
};

interface HasID {
  id: number;
}

const processUser = <T extends HasID>(user: T): T => {
  // Process user here

  return user;
};

console.log(processUser({ id: 21, name: "Jhonnel" }));
// console.log(processUser({ name: 'Jhonnel'}))

const getUserProperty = <T extends HasID, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
  return users.map((user) => user[key]);
};

const users = [
  {
    id: 1,
    first_name: "Gav",
    last_name: "Marsters",
    email: "gmarsters0@fda.gov",
    gender: "Male",
    ip_address: "7.166.218.7",
  },
  {
    id: 2,
    first_name: "Drusie",
    last_name: "Gwilliams",
    email: "dgwilliams1@printfriendly.com",
    gender: "Female",
    ip_address: "180.172.115.161",
  },
  {
    id: 3,
    first_name: "Brod",
    last_name: "Gianninotti",
    email: "bgianninotti2@weibo.com",
    gender: "Male",
    ip_address: "14.138.196.164",
  },
];

console.log(getUserProperty(users, "gender"));
console.log(getUserProperty(users, "first_name"));
console.log(getUserProperty(users, "ip_address"));

class StateObj<T> {
  private data: T;

  constructor(value: T) {
    this.data = value;
  }

  get state(): T {
    return this.data;
  }

  set state(value: T) {
    this.data = value;
  }
}

const store = new StateObj("James");
console.log(store.state);
store.state = "Jinni";
// store.state = 21

const mystore = new StateObj<(string | number | boolean)[]>(["Jason"]);
mystore.state = ["James", 21, true];
console.log(mystore.state);
