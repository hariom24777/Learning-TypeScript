"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const newCoffee = {
    name: "Cappuccino",
    price: 299,
    isHot: true,
};
let coffee;
coffee = {
    name: "Latte",
    price: 319,
    isHot: true,
};
const cappuccino = {
    name: "Cappuccino",
    price: 299,
    ingredients: ["espresso", "steamed milk", "thick milk foam"],
};
let smallCup = { size: "200ml" };
let bigCup = { size: "500ml", material: "steel" };
smallCup = bigCup;
const myCoffee = { brewTime: 5, beans: "Arabica" };
const teaBrew = myCoffee;
const user1 = {
    username: "hacker",
    password: "pass123",
};
// Partial
const updateTea = (updates) => {
    console.log("Updating tea with", updates);
};
updateTea({ price: 25 });
// Required
const placeOrder = (order) => {
    console.log(order);
};
placeOrder({ name: "Lemon Tea", quantity: 2 });
const chaiInfo = {
    name: "Lemon Tea",
    price: 30,
};
const publicChai = {
    name: "Lemon Tea",
    price: 30,
    isHot: true,
};
//# sourceMappingURL=objects.js.map