import { useReducer } from "react";

const initialValue = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.payload };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    case "MULTIPLYBY2":
      return { count: state.count * 2 };
  }
}

function ReducerCounter() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <>
      <h1>Reducer Counter</h1>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 5 })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
      <button onClick={() => dispatch({ type: "MULTIPLYBY2" })}>
        MULTIPLYBY2
      </button>
    </>
  );
}
export default ReducerCounter;
