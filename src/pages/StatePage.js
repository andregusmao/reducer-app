import React, { useState } from "react";

export default function StatePage() {
  const initialState = 0;
  const [count, setCount] = useState(initialState);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(0)}>RESET</button>
    </div>
  );
}