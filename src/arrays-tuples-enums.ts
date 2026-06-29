// Array

const coffeeFlavours: string[] = ["Hazelnut", "Caramel"];
const coffeePrice: number[] = [199, 129];

const ratings: Array<number> = [4.8, 5.0];

type Coffee = {
  name: string;
  price: number;
};

const menu: Coffee[] = [
  { name: "Hazelnut", price: 199 },
  { name: "Caramel", price: 129 },
];

const cities: readonly string[] = ["Delhi", "Kolkata", "Bombay"];

const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

// Tuples

let coffeeTuple: [string, number];

coffeeTuple = ["Caramel", 129];

let userInfo: [string, number, boolean?];

userInfo = ["hacker", 404, true];

const location: readonly [number, number] = [20.65, 65.2];

const coffeeItems: [name: string, price: number] = ["Hazelnut", 199];

let t: [string, number] = ["Coffee", 10];
t.push("extra");

// Enums

enum CupSize {
  SMALL,
  MEDIUM,
  LARGE,
}

const size = CupSize.LARGE;

enum Status {
  PENDING = 100,
  SERVED, //101
  CANCELLED, //102
}

enum CoffeeType {
  CAPPUCCINO = "cappuccino",
  ESPRESSO = "espresso",
}

function makeCoffee(type: CoffeeType) {
  console.log(`Making ${type}`);
}

makeCoffee(CoffeeType.ESPRESSO);

enum hetroValues {
  ID = 1,
  USERNAME = "hacker",
}

const enum Sugars {
  LOW = 1,
  MEDIUM = 2,
  LARGE = 3,
}

const useSugar = Sugars.LOW;


