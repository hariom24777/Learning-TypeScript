function getOrder(kind: string | number) {
  if (typeof kind === "string") {
    return `Preparing the ${kind} in kitchen.`;
  }
  return `Order Id: ${kind}`;
}

function serveOrder(msg?: string) {
  if (msg) {
    return `Serving ${msg}`;
  }
  return `Serving best coffee`;
}

function orderCoffee(size: "small" | "medium" | "large" | number) {
  if (size === "small") {
    return `Lil champion coffee...`;
  }
  if (size === "medium" || size === "large") {
    return `LevelUp coffee`;
  }
  return `Coffee order: ${size}`;
}

type CoffeeOrder = {
  type: string;
  sugar: number;
};

function isCoffeeOrder(obj: any): obj is CoffeeOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}

function serveCoffeeOrder(item: CoffeeOrder | string) {
  if (isCoffeeOrder(item)) {
    return `Serving ${item.type} with ${item.sugar}`;
  }
  return `Serving custom coffee: ${item}`;
}

type MasalaTea = { type: "masala"; spiceLevel: number };
type GingerTea = { type: "ginger"; hardnessLevel: number };
type ElaichiTea = { type: "elaichi"; aroma: number };

type Tea = MasalaTea | GingerTea | ElaichiTea;

function MakeTea(order: Tea) {
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

function brew(order: MasalaTea | GingerTea) {
  if ("spiceLevel" in order) {
    // It is definitely Masala Tea
  }
}

function isStringArray(arr: unknown): arr is string[] {
  return true;
}
