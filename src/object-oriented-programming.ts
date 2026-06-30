class Coffee {
  flavour: string;
  price: number;

  constructor(flavour: string, price: number) {
    this.flavour = flavour;
    this.price = price;
  }
}

const espresso = new Coffee("espresso", 279);
espresso.flavour = "espresso";

class User {
  public username: string = "hacker";

  private nickname = "harry";
  reveal() {
    return this.nickname;
  }
}

class UserInfo {
  protected email = "hacker.mail";
}

class UserData extends UserInfo {
  getEmail() {
    return this.email;
  }
}

// new UserData().getEmail
// const user1 = new User();

class Wallet {
  #balance = 100;

  getBalance() {
    return this.#balance;
  }
}

const w = new Wallet();
w.getBalance;

class Cup {
  readonly capacity: number = 250;
  constructor(capacity: number) {
    this.capacity = capacity;
  }
}

class newCoffee {
  private _sugar = 2;

  //   getter
  get sugar() {
    return this._sugar;
  }

  //   setter
  set sugar(value: number) {
    if (value > 5) throw new Error("Too much sugar, not recommended!");
    this._sugar = value;
  }
}

const myCoffee = new newCoffee();
myCoffee.sugar = 2;

class OneCoffee {
  static shopName = "Coffee with Hacker";

  constructor(public flavour: string) {}
}

console.log(OneCoffee.shopName);

abstract class Drink {
  abstract make(): void;
}

class MyCoffee extends Drink {
  make() {
    console.log("Brewing coffee...");
  }
}

// Composition
class Heater {
  heat() {}
}

class CoffeeMaker {
  constructor(private heater: Heater) {}
  make() {
    this.heater.heat;
  }
}

