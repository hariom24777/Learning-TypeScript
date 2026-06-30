import { CoffeeCard } from "./components/CoffeeCard.tsx";
import { Counter } from "./components/Counter.tsx";
import CoffeeList from "./components/CoffeeList.tsx";
import type { Coffee } from "./types.ts";
import { OrderForm } from "./components/OrderForm.tsx";
import { Card } from "./components/Card.tsx";

const menu: Coffee[] = [
  { id: 1, name: "Espresso", price: 289 },
  { id: 2, name: "Cappuccino", price: 329 },
  { id: 3, name: "Latte", price: 301 },
];

function App() {
  return (
    <>
      <section>
        <h1>Coffee with React & TypeScript</h1>
        <CoffeeCard name="Cappuccino" price={389} />
        <CoffeeCard name="Espresso" price={349} />
        <div>
          <Counter />
        </div>
        <div>
          <CoffeeList items={menu} />
        </div>
        <div>
          <OrderForm
            onSubmit={(order) => {
              console.log("Order placed for", order.name, order.cups, "cups.");
            }}
          />
        </div>
        <div>
          <Card title="Coffee" footer={<button>Order Now</button>} />
        </div>
      </section>
    </>
  );
}

export default App;
