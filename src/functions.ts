function makeCoffee(type: string, cups: number) {
  console.log(`Making ${cups} cups of ${type}`);
}

makeCoffee("Cappuccino", 2);

function getCoffeePrice(): number {
  return 249;
}

function makeOrder(order: string) {
  if (!order) return null;
  return order;
}

function logCoffee(): void {
  console.log("Coffee is ready!");
}

// function orderCoffee(type?: string ){};

function orderCoffee(type: string = "Cappuccino") {}

function createCoffee(order: {
  type: string;
  sugar: number;
  size: "small" | "large";
}): number {
  return 400;
}
