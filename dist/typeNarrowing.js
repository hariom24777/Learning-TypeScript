"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getOrder(kind) {
    if (typeof kind === "string") {
        return `Preparing the ${kind} in kitchen.`;
    }
    return `Order Id: ${kind}`;
}
function serveOrder(msg) {
    if (msg) {
        return `Serving ${msg}`;
    }
    return `Serving best coffee`;
}
function orderCoffee(size) {
    if (size === "small") {
        return `Lil champion coffee...`;
    }
    if (size === "medium" || size === "large") {
        return `LevelUp coffee`;
    }
    return `Coffee order: ${size}`;
}
function isCoffeeOrder(obj) {
    return (typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number");
}
function serveCoffeeOrder(item) {
    if (isCoffeeOrder(item)) {
        return `Serving ${item.type} with ${item.sugar}`;
    }
    return `Serving custom coffee: ${item}`;
}
function MakeTea(order) {
    switch (order.type) {
        case "masala":
            return `Masala Tea`;
            break;
        case "ginger":
            return `Ginger Tea`;
            break;
        case "elaichi":
            return `Elaichi Tea`;
            break;
    }
}
function brew(order) {
    if ("spiceLevel" in order) {
        // It is definitely Masala Tea
    }
}
function isStringArray(arr) {
    return true;
}
//# sourceMappingURL=typeNarrowing.js.map