"use strict";
// function greeter(name:string) {
//     console.log(`Hello, ${name}!`);
function greet(person) {
    return "Hello, ".concat(person.firstName, " ").concat(person.lastName);
}
