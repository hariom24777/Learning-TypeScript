// Interfaces

interface Coffee {
  flavour: string;
  price: number;
  milk?: boolean;
}

const cappuccino: Coffee = {
  flavour: "cappuccino",
  price: 289,
};

interface CoffeeShop {
  readonly id: number;
  name: string;
  location: string;
}

const shop: CoffeeShop = { id: 1, name: "Coffee & Coffee", location: "Bombay" };

interface DiscountCalculator {
  (price: number): number;
}

const applyFifty: DiscountCalculator = (p) => p * 0.5;

interface CoffeeMachine {
  start(): void;
  stop(): void;
}
const machine: CoffeeMachine = {
  start() {
    console.log("start");
  },
  stop() {
    console.log("stop");
  },
};

interface CoffeeRatings {
  [flavour: string]: number;
}

const ratings: CoffeeRatings = {
  cappuccino: 4.8,
  espresso: 4.5,
};

interface User {
  name: string;
}
interface User {
  age: number;
}

const user1: User = {
  name: "hacker",
  age: 20,
};

interface A {
  a: string;
}
interface B {
  b: string;
}

interface C extends A, B {}
