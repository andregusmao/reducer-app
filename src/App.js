import React from "react";

import ReducerPage from "./pages/ReducerPage";
import StatePage from "./pages/StatePage";

export default function App() {
  return (
    <>
      <div>
        <h4>useReducer()</h4>
        <ReducerPage />
      </div>
      <div>
        <h4>useState()</h4>
        <StatePage />
      </div>
    </>
  );
}
