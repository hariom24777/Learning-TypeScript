"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Union
let followers = "1M";
let apiRequestStatus = "pending";
const orders = ["15", "20", "25", "65"];
let currentOrder;
for (let order of orders) {
    if (order === "20") {
        currentOrder = order;
        break;
    }
}
console.log(currentOrder);
let apiData;
//# sourceMappingURL=union_and_any.js.map