function wrapInArray<T>(item: T): T[] {
  return [item];
}

wrapInArray("cappuccino");
wrapInArray(65);
wrapInArray({ price: 329 });

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

pair("cappuccino", 329);
pair("cappuccino", { cupSize: "M", quantity: 2 });

// generic-interface

interface Box<T> {
  content: T;
}

const box1: Box<number> = { content: 10 };
const box2: Box<string> = { content: "ten" };

interface ApiPromise<T> {
  status: number;
  data: T;
}

const res: ApiPromise<{ flavour: string }> = {
  status: 200,
  data: { flavour: "espresso" },
};
