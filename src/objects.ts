const newCoffee = {
  name: "Cappuccino",
  price: 299,
  isHot: true,
};

let coffee: {
  name: string;
  price: number;
  isHot: boolean;
};

coffee = {
  name: "Latte",
  price: 319,
  isHot: true,
};

type Coffee = {
  name: string;
  price: number;
  ingredients: string[];
};

const cappuccino: Coffee = {
  name: "Cappuccino",
  price: 299,
  ingredients: ["espresso", "steamed milk", "thick milk foam"],
};

type Cup = { size: string };
let smallCup: Cup = { size: "200ml" };
let bigCup = { size: "500ml", material: "steel" };
smallCup = bigCup;

type Brew = { brewTime: number };
const myCoffee = { brewTime: 5, beans: "Arabica" };
const teaBrew: Brew = myCoffee;

type User = {
  username: string;
  password: string;
};

const user1: User = {
  username: "hacker",
  password: "pass123",
};

type Item = { name: string; quantity: number };
type Address = { street: string; pincode: number };
type Order = {
  id: string;
  items: Item[];
  address: Address;
};

type Tea = {
  name: string;
  price: number;
  isHot: boolean;
};

// Partial
const updateTea = (updates: Partial<Tea>) => {
  console.log("Updating tea with", updates);
};

updateTea({ price: 25 });

type CoffeeOrder = {
  name?: string;
  quantity?: number;
};

// Required
const placeOrder = (order: Required<CoffeeOrder>) => {
  console.log(order);
};

placeOrder({ name: "Lemon Tea", quantity: 2 });

type Chai = {
  name: string;
  price: number;
  isHot: boolean;
  ingredients: string[];
};

// Pick
type BasicChaiInfo = Pick<Chai, "name" | "price">;

const chaiInfo: BasicChaiInfo = {
  name: "Lemon Tea",
  price: 30,
};

type NewChai = {
  name: string;
  price: number;
  isHot: boolean;
  secretIngredients: string;
};

// Omit
type PublicChai = Omit<NewChai, "secretIngredients">;

const publicChai: PublicChai = {
  name: "Lemon Tea",
  price: 30,
  isHot: true,
};
