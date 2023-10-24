import { useState } from "react";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="p-3 mb-5 text-gray-500 bg-gray-600 rounded-xl">
        Hello Bhavin
      </h1>
      <Card about="About MacBook" btnText="click Me" />
      <Card about="About Windows" btnText="Read Me " />
    </>
  );
}

export default App;
