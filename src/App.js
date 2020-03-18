import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [supCount, setSupCount] = useState(0);
  //useState returns Array with 2 elements: the state and a func that
  //can be called to modify the state.
  //Argument in useState = initial state
  //In this case, supCount is initialised as 0

  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(oldCount => oldCount + 1);
  };
  const decrement = () => {
    setCount(oldCount => oldCount - 1);
  };

  const superIncrement = () => {
    if (supCount < 2) {
      setCount(oldCount => oldCount + 10);
      setSupCount(oldCount => oldCount + 1);
    }
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h3>Like Counter</h3>
      <p>Overall Count: {count}</p>
      <button onClick={increment}> Like </button>
      <button onClick={decrement}> Dislike </button>
      <p />
      <button onClick={superIncrement}> SUPER LIKE </button>
    </div>
  );
}
