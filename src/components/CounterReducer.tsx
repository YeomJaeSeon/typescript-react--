//간단한 counter + useReducer로 상태관리
import React, { useReducer } from "react";

type Action = { type: "INCREASE" } | { type: "DECREASE" };

const reducer = (state: number, action: Action): number => {
  console.log(action.type);
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    default:
      return state;
  }
};

export default function CounterReducer() {
  const [state, dispatch] = useReducer(reducer, 0);

  const increaseFunc = () => {
    dispatch({ type: "INCREASE" });
  };

  const decreaseFunc = () => {
    dispatch({ type: "DECREASE" });
  };

  return (
    <div>
      {state}
      <button onClick={increaseFunc}>INCREASE</button>
      <button onClick={decreaseFunc}>DECREASE</button>
    </div>
  );
}
