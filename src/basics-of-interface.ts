type CoffeeOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};

function makeCoffee(order: CoffeeOrder) {
  console.log(order);
}

function serveCoffee(order: CoffeeOrder) {
  console.log(order);
}

type CoffeeRecipe = {
  water: number;
  milk: number;
};

// interface CoffeeRecipe {
//   water: number;
//   milk: number;
// }

class Espresso implements CoffeeRecipe {
  water = 100;
  milk = 50;
}

interface CupSize {
  size: "small" | "large";
}

class Coffee implements CupSize {
  size: "small" | "large" = "large";
}

type CoffeeType = "Espresso" | "Cappuccino" | "Latte" | "Macchiato" | "Mocha";

function orderCoffee(t: CoffeeType) {
  console.log(t);
}

type BaseCoffee = { coffeeBeans: number };
type Extra = { flavour: number };

type CustomCoffee = BaseCoffee & Extra;

const cup: CustomCoffee = {
  coffeeBeans: 2,
  flavour: 1,
};

type User = {
  username: string;
  bio?: string; // optional
};

const user1: User = { username: "Harry" };
const user2: User = { username: "Harry", bio: "harry.com" };

type Config = {
  readonly appName: string;
  version: number;
};

const configuration: Config = {
  appName: "Hacker",
  version: 1,
};

// configuration.appName = "HackerUp"   //Cannot assign to 'appName' because it is a read-only property.
