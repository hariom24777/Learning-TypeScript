"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let response = "42";
let numericLength = response.length;
let bookString = '{"name": "Forever"}';
let bookObject = JSON.parse(bookString);
console.log(bookObject);
const inputElement = document.getElementById("username");
let value;
value = "HackerStudio";
value = [1, 2, 3];
value = 20.65;
value.toUpperCase();
let newValue;
newValue = "HackerStudio";
newValue = [1, 2, 3];
newValue = 20.65;
if (typeof newValue === "string") {
    newValue.toUpperCase();
}
try {
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log("Error: ", error);
}
const data = "HackerStudio";
const strData = data;
// type Role = "admin" | "user" | "superAdmin";
function redirectBasedOnRole(role) {
    if (role === "admin") {
        console.log("Admin Interface");
        return;
    }
    if (role === "user") {
        console.log("User Interface");
        return;
    }
    role; //role: never
    //   role;  //role: superAdmin
}
function neverReturn() {
    while (true) { }
}
//# sourceMappingURL=moreTypes.js.map