"use strict";
// string, number, boolean, array, object, tuple, void, never
Object.defineProperty(exports, "__esModule", { value: true });
const a = "hello";
const b = 121;
const c = true;
// array - fixed type but not the length
const d = [1, 2];
const e = [1, 2];
e.push(4);
// tuple - fixed type and length
const f = [1, 2, 3];
const g = [1, "a", true];
// void
function greet(name) {
    console.log(`Hello ${name}`);
}
greet("nick");
// never
function age(age) {
    return `I'm ${age} years old`;
}
age(24);
// never - when function never end
function endless(name) {
    throw new Error("something went wrong !");
}
// endless('nick')
// without type
const user = {
    name: "Prashant",
    age: 24,
    isMale: true,
};
function greett(data) {
    console.log("hello " + data.name + " your are is " + data.age);
}
greett(user);
const userr = {
    name: "Prashant",
    age: 24,
    isMale: true,
};
function greettt(data) {
    console.log("hello " + data.name + " your are is " + data.age);
}
greettt(userr);
// any, unknown
// any - turn off typescript
let h;
h = 123;
console.log(h.toUpperCase());
// unknown - safe version of any
let i;
i = "hello";
if (typeof i == "string")
    console.log(i.toUpperCase());
//# sourceMappingURL=index.js.map