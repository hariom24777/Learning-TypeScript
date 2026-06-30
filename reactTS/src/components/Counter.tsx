import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <p>Total Coffee Orders: {count}</p>
      <button onClick={() => setCount(count + 1)}>Order a Coffee</button>
      <button onClick={() => setCount(0)}>Reset Counter</button>
    </div>
  );
}
