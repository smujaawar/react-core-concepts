// import { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     //functionl update
// setCount((prev) => prev + 1);
//     // setCount((prev) => prev + 1);
//     // setCount(count + 1);
//     // console.log("component rerendered");
//     //batch update
//     //asynchrounous update
//     console.log(count); //0
//     setCount(count + 1);
//     console.log(count); // 0
//   };

//   const decrement = () => {
//     setCount(count - 1);
//   };

//   return (
//     <>
//       <h1>useState Counter</h1>
//       <p>{count}</p>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </>
//   );
// }
// export default Counter;
