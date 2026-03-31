// string, number, boolean, array, object, tuple, void, never

const a: string = "hello";

const b: number = 121;

const c: boolean = true;

// array - fixed type but not the length

const d: Array<number> = [1, 2];

const e: number[] = [1, 2];

e.push(4);

// tuple - fixed type and length

const f: [number, number, number] = [1, 2, 3];

const g: [number, string, boolean] = [1, "a", true];

// void

function greet(name: string): void {
  console.log(`Hello ${name}`);
}

greet("nick");

// never

function age(age: number): string {
  return `I'm ${age} years old`;
}

age(24);

// never - when function never end

function endless(name: string): never {
  throw new Error("something went wrong !");
}

// endless('nick')

// without type

const user = {
  name: "Prashant",
  age: 24,
  isMale: true,
};

function greett(data: { name: string; age: number; isMale: boolean }): void {
  console.log("hello " + data.name + " your are is " + data.age);
}

greett(user);

// with type

type USER = { name: string; age: number; isMale: boolean };

const userr: USER = {
  name: "Prashant",
  age: 24,
  isMale: true,
};

function greettt(data: USER): void {
  console.log("hello " + data.name + " your are is " + data.age);
}

greettt(userr);

// any, unknown

// any - turn off typescript
let h: any;

h = 123;

console.log(h.toUpperCase());

// unknown - safe version of any
let i: unknown;

i = "hello";

if (typeof i == "string") console.log(i.toUpperCase());
