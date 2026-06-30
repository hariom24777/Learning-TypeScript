import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="counterContainer">
      <p>Total Coffee Orders: {count}</p>
      <div className="buttonContainer">
        <button onClick={() => setCount(count + 1)}>Order a Coffee</button>
        <button onClick={() => setCount(0)}>Reset Counter</button>
      </div>
    </div>
  );
}
