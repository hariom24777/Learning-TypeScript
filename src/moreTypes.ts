let response: any = "42";

let numericLength: number = (response as string).length;

type Book = {
  name: string;
};
let bookString = '{"name": "Forever"}';
let bookObject = JSON.parse(bookString) as Book;
console.log(bookObject);

const inputElement = document.getElementById("username") as HTMLInputElement;

let value: any;

value = "HackerStudio";
value = [1, 2, 3];
value = 20.65;
value.toUpperCase();

let newValue: unknown;

newValue = "HackerStudio";
newValue = [1, 2, 3];
newValue = 20.65;
if (typeof newValue === "string") {
  newValue.toUpperCase();
}

try {
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
  console.log("Error: ", error);
}

const data: unknown = "HackerStudio";
const strData: string = data as string;



type Role = "admin" | "user";
// type Role = "admin" | "user" | "superAdmin";

function redirectBasedOnRole(role: Role): void {
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


function neverReturn():never{
    while(true){}
}