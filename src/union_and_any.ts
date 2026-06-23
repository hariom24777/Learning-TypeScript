// Union
let followers: number | string = "1M";
let apiRequestStatus: "pending" | "success" | "error" = "pending";

const orders = ["15", "20", "25", "65"];
let currentOrder: string | undefined;
for (let order of orders) {
  if (order === "20") {
    currentOrder = order;
    break;
  }
}

console.log(currentOrder);

let apiData: any;