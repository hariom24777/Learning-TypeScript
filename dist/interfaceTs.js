"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeCoffee(order) {
    console.log(order);
}
function serveCoffee(order) {
    console.log(order);
}
// interface CoffeeRecipe {
//   water: number;
//   milk: number;
// }
class Espresso {
    water = 100;
    milk = 50;
}
class Coffee {
    size = "large";
}
function orderCoffee(t) {
    console.log(t);
}
const cup = {
    coffeeBeans: 2,
    flavour: 1,
};
const user1 = { username: "Harry" };
const user2 = { username: "Harry", bio: "harry.com" };
const configuration = {
    appName: "Hacker",
    version: 1,
};
// configuration.appName = "HackerUp"   //Cannot assign to 'appName' because it is a read-only property.
//# sourceMappingURL=interfaceTs.js.map