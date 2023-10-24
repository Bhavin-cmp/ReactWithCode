import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(5);

  const addValue = () => {
    console.log("Clicked", count);
    setCount((prevCounter) => prevCounter + 1);
    setCount((prevCounter) => prevCounter + 1);

    setCount((prevCounter) => prevCounter + 1);

    setCount((prevCounter) => prevCounter + 1);
  };
  const removeValue = () => {
    setCount(count - 1);
  };

  console.log("hello", count);
  return (
    <>
      <h2>Counter Value : {count}</h2>

      <button onClick={addValue} value={count}>
        Add Value
      </button>
      <br />
      <button onClick={removeValue} value={count}>
        Remove Value
      </button>
    </>
  );
}

export default App;
