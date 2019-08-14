import React, { useReducer } from "react";

import counterReducer from "../reducers/counterReducer";

export default function ReducerPage() {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <div>{state.count}</div>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
    </div>
  );
}